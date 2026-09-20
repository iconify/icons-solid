import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrnj_u0yg.css';
import '../../css/k/k5-idhbfu.css';
import '../../css/t/tz1tfxb6a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qrnj_u0yg"/><path class="k5-idhbfu"/><path class="tz1tfxb6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:coolify-dark"} {...others} />);
}

export default Component;
