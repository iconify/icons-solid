import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk57u1bly.css';
import '../../css/x/x2gu2vr4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wk57u1bly"/><path class="x2gu2vr4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:paint-roll"} {...others} />);
}

export default Component;
