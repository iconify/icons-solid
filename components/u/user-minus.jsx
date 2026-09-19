import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9tks-8da.css';
import '../../css/k/krxdfbb4h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t9tks-8da"/><path class="krxdfbb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:user-minus"} {...others} />);
}

export default Component;
