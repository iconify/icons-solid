import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kznva-0mg.css';
import '../../css/g/gvmh5mbbf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kznva-0mg"/><path class="gvmh5mbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:forecast-lightning-30"} {...others} />);
}

export default Component;
