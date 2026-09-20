import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq0ob0rza.css';
import '../../css/z/z3kv0ccxa.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/l/l4css97ah.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/q/q3aj0vory.css';
import '../../css/n/nnh8hsciz.css';
import '../../css/z/zpt1uxb_e.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uq0ob0rza"/><path class="z3kv0ccxa"/><path class="amn_b-_3e"/><path class="l4css97ah"/><path class="wkz0_n5gi"/><path class="q3aj0vory"/><path class="nnh8hsciz"/><path class="zpt1uxb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-light-skin-tone-curly-hair"} {...others} />);
}

export default Component;
