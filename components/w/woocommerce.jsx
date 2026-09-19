import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1ph6jbci.css';
import '../../css/s/st682lbcm.css';
import '../../css/u/us9ytuuie.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m1ph6jbci"/><path class="st682lbcm"/><path class="us9ytuuie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:woocommerce"} {...others} />);
}

export default Component;
