import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3v_b68vp.css';
import '../../css/b/bcdhxdblm.css';
import '../../css/l/lwi4j495p.css';
import '../../css/d/dko403b3x.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k3v_b68vp"/><path class="bcdhxdblm"/><path class="lwi4j495p"/><path class="dko403b3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:prisma-wordmark"} {...others} />);
}

export default Component;
