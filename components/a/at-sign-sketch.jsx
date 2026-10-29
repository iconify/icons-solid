import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x8us6ubuk.css';
import '../../css/u/uxh4s2grv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="x8us6ubuk"/><path class="uxh4s2grv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:at-sign-sketch"} {...others} />);
}

export default Component;
