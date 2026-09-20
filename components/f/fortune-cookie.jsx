import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ueum36p4v.css';
import '../../css/c/cvp889bmc.css';
import '../../css/x/xaeykmbyl.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/m26u0abhn.css';
import '../../css/a/a4o5ydhls.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ueum36p4v"/><path class="cvp889bmc"/><path class="xaeykmbyl"/><g class="jn8qy4bru"><path class="m26u0abhn"/><path class="a4o5ydhls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fortune-cookie"} {...others} />);
}

export default Component;
