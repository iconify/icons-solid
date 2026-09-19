import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zui2hxbrq.css';
import '../../css/h/hhdv4dm-f.css';
import '../../css/t/t_zsd3ayu.css';
import '../../css/g/gfzoj3bld.css';
import '../../css/q/qvxnog31u.css';
import '../../css/g/golqglbxi.css';
import '../../css/e/esyf9t7ob.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zui2hxbrq"/><path class="hhdv4dm-f"/><path class="t_zsd3ayu"/><path class="gfzoj3bld"/><path class="qvxnog31u"/><path class="golqglbxi"/><path class="esyf9t7ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:europeanpostoffice"} {...others} />);
}

export default Component;
