import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mld8t6b-v.css';
import '../../css/n/n50gfghzm.css';
import '../../css/k/k-9x1gbvy.css';
import '../../css/e/end7byobw.css';
import '../../css/s/shyvbxudm.css';
import '../../css/g/g9t7ebcyw.css';
import '../../css/w/w-y6dwh9c.css';
import '../../css/e/esvbchbzk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mld8t6b-v"/><path class="n50gfghzm"/><path class="k-9x1gbvy"/><path class="end7byobw"/><path class="shyvbxudm"/><path class="g9t7ebcyw"/><circle class="w-y6dwh9c"/><path class="esvbchbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:television"} {...others} />);
}

export default Component;
