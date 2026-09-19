import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk4bfj7yl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kk4bfj7yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:shuffle"} {...others} />);
}

export default Component;
