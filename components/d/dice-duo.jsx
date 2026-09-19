import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arszanvyc.css';
import '../../css/f/f3jhhqbha.css';
import '../../css/d/dko573bkm.css';
import '../../css/s/s8lloenzi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="arszanvyc"/><path class="f3jhhqbha"/><path class="dko573bkm"/><path class="s8lloenzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dice-duo"} {...others} />);
}

export default Component;
