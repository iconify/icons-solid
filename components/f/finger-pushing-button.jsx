import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1etqbgrj.css';
import '../../css/m/mpk8geb5y.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/uz1fk_bxd.css';
import '../../css/w/wr-x_mbck.css';
import '../../css/k/kgjn30alc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="i1etqbgrj"/><path class="mpk8geb5y"/><g class="jn8qy4bru"><path class="uz1fk_bxd"/><path class="wr-x_mbck"/><path class="kgjn30alc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:finger-pushing-button"} {...others} />);
}

export default Component;
