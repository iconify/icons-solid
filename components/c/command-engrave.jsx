import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gycplyitt.css';
import '../../css/s/snq7lfbcd.css';
import '../../css/t/t83hz6hkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gycplyitt"/><path class="snq7lfbcd wm-shadow"/><path class="t83hz6hkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:command-engrave"} {...others} />);
}

export default Component;
