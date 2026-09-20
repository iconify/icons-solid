import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybi0n7bgm.css';
import '../../css/t/tsvf0gb_d.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/gh-zkbf1h.css';
import '../../css/h/hzo2obc3l.css';
import '../../css/z/zhxlol8cy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ybi0n7bgm"/><path class="tsvf0gb_d"/><g class="mc2zb0bvp"><path class="gh-zkbf1h"/><path class="hzo2obc3l"/><path class="zhxlol8cy"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:water-sun-bold-duotone"} {...others} />);
}

export default Component;
