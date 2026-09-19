import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_ot34bbd.css';
import '../../css/q/qbu68misp.css';
import '../../css/d/dq9knjb2v.css';
import '../../css/g/gchs6_bvw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="e_ot34bbd"/><path class="qbu68misp"/><path class="dq9knjb2v"/><path class="gchs6_bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:fastify-wordmark"} {...others} />);
}

export default Component;
