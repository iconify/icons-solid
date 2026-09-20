import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ganpgob_x.css';
import '../../css/n/nh_1xf49f.css';

const viewBox = {"width":722.8,"height":702};
const content = `<path class="ganpgob_x"/><path class="nh_1xf49f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kubernetes"} {...others} />);
}

export default Component;
