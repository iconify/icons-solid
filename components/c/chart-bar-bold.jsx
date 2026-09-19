import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sw7di4bjc.css';
import '../../css/i/ia9-m-qxc.css';
import '../../css/z/zmvg0zbao.css';
import '../../css/y/y8ogg5eag.css';
import '../../css/a/afkeoib-c.css';
import '../../css/r/rc24i1bup.css';
import '../../css/f/fkwkribsr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sw7di4bjc"/><path class="ia9-m-qxc"/><path clip-rule="evenodd" class="zmvg0zbao"/><path class="y8ogg5eag"/><path clip-rule="evenodd" class="afkeoib-c"/><path class="rc24i1bup"/><path class="fkwkribsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-bar-bold"} {...others} />);
}

export default Component;
