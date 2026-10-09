import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/g/gvz_-7xqa.css';
import '../../css/w/w5gcokbqt.css';
import '../../css/d/dc8kggb1z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="gvz_-7xqa"/><path class="w5gcokbqt"/><path class="dc8kggb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volleyball-20"} {...others} />);
}

export default Component;
