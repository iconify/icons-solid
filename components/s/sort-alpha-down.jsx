import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcdbvr6xr.css';
import '../../css/a/a-5u-gekh.css';
import '../../css/j/jrqm38_ak.css';
import '../../css/a/ajcefqbiu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kcdbvr6xr"/><path class="a-5u-gekh"/><path class="jrqm38_ak"/><path class="ajcefqbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sort-alpha-down"} {...others} />);
}

export default Component;
