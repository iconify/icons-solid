import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y21dk_wfs.css';
import '../../css/k/k4mqvjn9x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y21dk_wfs"/><path class="k4mqvjn9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:change-catalog"} {...others} />);
}

export default Component;
