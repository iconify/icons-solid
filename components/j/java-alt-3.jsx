import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wyu27vjiy.css';
import '../../css/o/o-dtb8b9e.css';
import '../../css/r/rd9dh3d5v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="wyu27vjiy"/><path class="o-dtb8b9e"/><path class="rd9dh3d5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:java-alt-3"} {...others} />);
}

export default Component;
