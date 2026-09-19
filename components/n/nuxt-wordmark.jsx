import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwf_b-maa.css';
import '../../css/i/iu0_yp7rx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gwf_b-maa"/><path class="iu0_yp7rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nuxt-wordmark"} {...others} />);
}

export default Component;
