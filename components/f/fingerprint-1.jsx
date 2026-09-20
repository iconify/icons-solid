import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixqu6acfo.css';
import '../../css/t/ttp2qj2qw.css';
import '../../css/g/gsa6egb0x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ixqu6acfo"/><path class="ttp2qj2qw"/><path class="gsa6egb0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fingerprint-1"} {...others} />);
}

export default Component;
