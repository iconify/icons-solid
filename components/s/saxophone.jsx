import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo6udlbzj.css';
import '../../css/t/tdry5hmhi.css';
import '../../css/j/j8a3oubxj.css';
import '../../css/v/vxeo1uj4t.css';
import '../../css/b/b-mfwxbbf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qo6udlbzj"/><path class="tdry5hmhi"/><ellipse class="j8a3oubxj"/><path class="vxeo1uj4t"/><path class="b-mfwxbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:saxophone"} {...others} />);
}

export default Component;
