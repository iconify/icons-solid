import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/thqapzbds.css';
import '../../css/w/w287tyz3k.css';
import '../../css/s/s8u9adbxv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="thqapzbds"/><path class="w287tyz3k"/><path class="s8u9adbxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:premake"} {...others} />);
}

export default Component;
