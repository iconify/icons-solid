import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sulviqbcg.css';
import '../../css/g/gcqn5mito.css';
import '../../css/d/dpl8qxvov.css';
import '../../css/z/zipwfabof.css';
import '../../css/y/ym90j4b9x.css';
import '../../css/f/fhe58nbrc.css';
import '../../css/s/sxr41sbre.css';
import '../../css/q/qqflh4buq.css';
import '../../css/t/t964pliwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sulviqbcg wm-shadow"/><path class="gcqn5mito"/><path class="dpl8qxvov"/><path class="zipwfabof"/><path class="wm-shine ym90j4b9x"/><path class="fhe58nbrc wm-s"/><path class="sxr41sbre wm-s"/><path class="qqflh4buq wm-s"/><path class="t964pliwg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:user-check"} {...others} />);
}

export default Component;
