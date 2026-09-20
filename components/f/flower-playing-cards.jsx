import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl_wy7rwg.css';
import '../../css/q/q59s5b1hh.css';
import '../../css/d/d-bxsqbdu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/z37-eqavp.css';
import '../../css/g/gdrzy4b-b.css';
import '../../css/c/cvupwub_d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xl_wy7rwg"/><circle class="q59s5b1hh"/><path class="d-bxsqbdu"/><g class="jn8qy4bru"><path class="z37-eqavp"/><circle class="gdrzy4b-b"/><path class="cvupwub_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flower-playing-cards"} {...others} />);
}

export default Component;
