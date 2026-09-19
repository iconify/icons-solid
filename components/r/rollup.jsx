import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uchn-5q-t.css';
import '../../css/j/jwg6sgb-j.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="uchn-5q-t"/><path class="jwg6sgb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:rollup"} {...others} />);
}

export default Component;
