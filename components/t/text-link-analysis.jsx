import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5zc53bhn.css';
import '../../css/o/otd0eoc4d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k5zc53bhn"/><path class="otd0eoc4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-link-analysis"} {...others} />);
}

export default Component;
