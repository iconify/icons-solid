import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnzo3sbiw.css';
import '../../css/z/zfws45ina.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jnzo3sbiw"/><circle class="zfws45ina"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:location-outline"} {...others} />);
}

export default Component;
