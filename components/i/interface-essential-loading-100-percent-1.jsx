import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghqal2bgo.css';
import '../../css/z/z_jfg6_tf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ghqal2bgo"/><path class="z_jfg6_tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-loading-100-percent-1"} {...others} />);
}

export default Component;
