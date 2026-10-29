import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tt03q571o.css';
import '../../css/i/ipt2rs9_u.css';
import '../../css/f/fjfxbcigs.css';
import '../../css/b/bur5g6bex.css';
import '../../css/j/joy4npahl.css';
import '../../css/t/tyu9-348q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tt03q571o wm-shadow"/><path class="ipt2rs9_u"/><path class="fjfxbcigs"/><path class="bur5g6bex"/><path class="joy4npahl wm-shine"/><path class="tyu9-348q wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:alert-triangle"} {...others} />);
}

export default Component;
