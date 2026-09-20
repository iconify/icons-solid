import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uo5h1db1c.css';
import '../../css/f/fvc3h-b5l.css';
import '../../css/l/lx7o3bc4d.css';
import '../../css/j/jrg2peceu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="uo5h1db1c"/><circle class="fvc3h-b5l"/><circle class="lx7o3bc4d"/><circle class="jrg2peceu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-speaker-2-speakers-music-audio"} {...others} />);
}

export default Component;
