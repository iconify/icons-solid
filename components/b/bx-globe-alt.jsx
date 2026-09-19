import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9hb5yb2a.css';
import '../../css/g/gctaj9b_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z9hb5yb2a"/><path class="gctaj9b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-globe-alt"} {...others} />);
}

export default Component;
