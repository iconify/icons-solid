import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p56rhtbce.css';
import '../../css/b/bxjv56brc.css';
import '../../css/a/awy7zdblf.css';
import '../../css/b/b_239qmsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="p56rhtbce wm-deco"/><path class="bxjv56brc wm-deco"/><path class="awy7zdblf"/><path class="b_239qmsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:braces-blueprint"} {...others} />);
}

export default Component;
