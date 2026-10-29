import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dt3yg1qsa.css';
import '../../css/t/tsa86mbae.css';
import '../../css/y/ywk5os59u.css';
import '../../css/y/ywlhoqbsn.css';
import '../../css/k/k26yyvc5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dt3yg1qsa wm-deco"/><path class="tsa86mbae wm-deco"/><path class="wm-deco ywk5os59u"/><path class="wm-k ywlhoqbsn"/><path class="k26yyvc5e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:footprints-blueprint"} {...others} />);
}

export default Component;
