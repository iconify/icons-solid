import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smusfyo3e.css';
import '../../css/g/gc1ce0bgt.css';
import '../../css/o/oexyxwbsr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="smusfyo3e"/><path class="gc1ce0bgt"/><path class="oexyxwbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ballot-box-20"} {...others} />);
}

export default Component;
