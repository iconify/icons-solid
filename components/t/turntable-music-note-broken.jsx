import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yaxzcyw0z.css';
import '../../css/h/hl5jo5b4t.css';
import '../../css/b/b-v3dtbhs.css';
import '../../css/f/fc4f7w-7u.css';
import '../../css/p/pwo3r4bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yaxzcyw0z"/><path class="hl5jo5b4t"/><circle class="b-v3dtbhs"/><path class="fc4f7w-7u"/><path class="pwo3r4bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-music-note-broken"} {...others} />);
}

export default Component;
