import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt-6a2b4v.css';
import '../../css/p/p0r4zkonq.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/l/l4css97ah.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/q/q3aj0vory.css';
import '../../css/n/nnh8hsciz.css';
import '../../css/z/zpt1uxb_e.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gt-6a2b4v"/><path class="p0r4zkonq"/><path class="amn_b-_3e"/><path class="l4css97ah"/><path class="wkz0_n5gi"/><path class="q3aj0vory"/><path class="nnh8hsciz"/><path class="zpt1uxb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-medium-skin-tone-curly-hair"} {...others} />);
}

export default Component;
