import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm_kd6_tw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lm_kd6_tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rain-scattered-night"} {...others} />);
}

export default Component;
