import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl18hibwg.css';
import '../../css/c/cczkb59al.css';
import '../../css/b/bl0w-qb9y.css';
import '../../css/g/gbd3bpbxc.css';
import '../../css/h/hh5xn1iiv.css';
import '../../css/z/zdzqo99bn.css';
import '../../css/g/gc4xpp_ha.css';
import '../../css/k/kmr-zacvh.css';
import '../../css/q/q_-lxeb9s.css';
import '../../css/v/v4oj9cbzl.css';
import '../../css/q/qtnfeibme.css';
import '../../css/m/mtvhovbvm.css';
import '../../css/a/a0l28o64q.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="jl18hibwg"/><path class="cczkb59al"/><path class="bl0w-qb9y"/><path class="gbd3bpbxc"/><path class="hh5xn1iiv"/><path class="zdzqo99bn"/><path class="gc4xpp_ha"/><path class="kmr-zacvh"/><path class="q_-lxeb9s"/><g class="v4oj9cbzl"><path class="qtnfeibme"/><path class="mtvhovbvm"/></g><path class="a0l28o64q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gr-4x3"} {...others} />);
}

export default Component;
