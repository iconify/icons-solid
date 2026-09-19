import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emmbnebwc.css';
import '../../css/p/pu8y5lb1l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="emmbnebwc"/><path class="pu8y5lb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:train-profile"} {...others} />);
}

export default Component;
