import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr54h2ycg.css';
import '../../css/e/e4rr4w_hj.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="zr54h2ycg"/><path class="e4rr4w_hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pill-bottle-filled"} {...others} />);
}

export default Component;
