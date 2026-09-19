import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj2h69bvg.css';
import '../../css/x/x0l9201mw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rj2h69bvg"/><path class="x0l9201mw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-webcam"} {...others} />);
}

export default Component;
