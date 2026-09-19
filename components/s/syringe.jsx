import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbkdobhmu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zbkdobhmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:syringe"} {...others} />);
}

export default Component;
