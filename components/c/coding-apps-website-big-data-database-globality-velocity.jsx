import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhm_o-bko.css';
import '../../css/l/lt5o6i59c.css';
import '../../css/v/vkb4fjbxq.css';
import '../../css/f/fzhmj1bua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mhm_o-bko"/><path class="lt5o6i59c"/><path class="vkb4fjbxq"/><path class="fzhmj1bua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-big-data-database-globality-velocity"} {...others} />);
}

export default Component;
