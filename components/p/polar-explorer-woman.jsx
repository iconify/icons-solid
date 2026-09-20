import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqwde7xfi.css';
import '../../css/i/i0t_46bnj.css';
import '../../css/j/jgoivqbdt.css';
import '../../css/o/os75fkwsm.css';
import '../../css/p/p7o5-u2_n.css';
import '../../css/m/mqs5wrbir.css';
import '../../css/l/larqeb_li.css';
import '../../css/w/ww6ctnbff.css';
import '../../css/m/mz4qb2avu.css';
import '../../css/f/f4kantbte.css';
import '../../css/w/wnpivrbbw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wqwde7xfi"/><path class="i0t_46bnj"/><path class="jgoivqbdt"/><path class="os75fkwsm"/><path class="p7o5-u2_n"/><path class="mqs5wrbir"/><path class="larqeb_li"/><g class="ww6ctnbff"><path class="mz4qb2avu"/><path class="f4kantbte"/><path class="wnpivrbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:polar-explorer-woman"} {...others} />);
}

export default Component;
