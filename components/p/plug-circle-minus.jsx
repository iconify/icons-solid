import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l82wo8b1d.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="l82wo8b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:plug-circle-minus"} {...others} />);
}

export default Component;
