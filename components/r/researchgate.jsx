import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq-x_vb2o.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="aq-x_vb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:researchgate"} {...others} />);
}

export default Component;
