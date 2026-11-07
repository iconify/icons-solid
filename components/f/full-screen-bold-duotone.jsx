import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s15ilickh.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/ra6fhob8w.css';
import '../../css/s/sude8ublr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s15ilickh"/><g class="xtpeb-edw"><path class="ra6fhob8w"/><path class="sude8ublr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:full-screen-bold-duotone"} {...others} />);
}

export default Component;
