import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbt4cvb0h.css';
import '../../css/t/t5buo1bcw.css';
import '../../css/o/oxb3w9gic.css';
import '../../css/a/ae9yrbb2y.css';
import '../../css/i/ivyf27zbw.css';
import '../../css/p/pdyz_2yhx.css';
import '../../css/z/z04drlb1l.css';
import '../../css/o/obg34cb1x.css';
import '../../css/w/w3v171ugh.css';
import '../../css/t/txgddvbom.css';
import '../../css/z/zmoi8tb4x.css';
import '../../css/w/w7oyrx5ts.css';
import '../../css/w/w6pf-fdka.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="bbt4cvb0h"><path class="t5buo1bcw"/><path class="oxb3w9gic"/><path class="ae9yrbb2y"/><path class="ivyf27zbw"/><path class="pdyz_2yhx"/></g><g class="z04drlb1l"><path class="obg34cb1x"/><path class="w3v171ugh"/><path class="txgddvbom"/><path class="zmoi8tb4x"/><path class="w7oyrx5ts"/><path class="w6pf-fdka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:index-pointing-up-dark-skin-tone"} {...others} />);
}

export default Component;
