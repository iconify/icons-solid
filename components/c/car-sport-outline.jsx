import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7_fn5bzo.css';
import '../../css/g/g7v3m3bhf.css';
import '../../css/e/eu_shmbfp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c7_fn5bzo"/><path class="g7v3m3bhf"/><path class="eu_shmbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:car-sport-outline"} {...others} />);
}

export default Component;
