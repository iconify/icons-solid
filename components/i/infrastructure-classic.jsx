import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_wkv8bja.css';
import '../../css/p/pv_j-gb0w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y_wkv8bja"/><path class="pv_j-gb0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:infrastructure-classic"} {...others} />);
}

export default Component;
