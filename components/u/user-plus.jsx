import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9tks-8da.css';
import '../../css/f/flesb1b9w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t9tks-8da"/><path class="flesb1b9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:user-plus"} {...others} />);
}

export default Component;
