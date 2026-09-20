import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkwmvhbka.css';
import '../../css/s/srpd8uwce.css';
import '../../css/y/yqx_j8uyx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mkwmvhbka"/><path class="srpd8uwce"/><path class="yqx_j8uyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-twitter"} {...others} />);
}

export default Component;
