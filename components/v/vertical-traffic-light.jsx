import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rehbl8c6s.css';
import '../../css/b/bmhf9qwuy.css';
import '../../css/z/zmi__cblv.css';
import '../../css/p/p785xu-hv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/xzj-gi6qx.css';
import '../../css/u/uoechtczl.css';
import '../../css/j/jibfrubgt.css';
import '../../css/x/x46jonbqs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rehbl8c6s"/><circle class="bmhf9qwuy"/><circle class="zmi__cblv"/><circle class="p785xu-hv"/><g class="ij2x_72vy"><path class="xzj-gi6qx"/><circle class="uoechtczl"/><circle class="jibfrubgt"/><circle class="x46jonbqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:vertical-traffic-light"} {...others} />);
}

export default Component;
