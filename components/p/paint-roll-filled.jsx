import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wljewpjoe.css';
import '../../css/x/x2gu2vr4d.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="wljewpjoe"/><path class="x2gu2vr4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:paint-roll-filled"} {...others} />);
}

export default Component;
