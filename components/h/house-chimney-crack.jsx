import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzba8cryx.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="yzba8cryx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:house-chimney-crack"} {...others} />);
}

export default Component;
