import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkynldbkl.css';
import '../../css/y/y_r_lzbqt.css';
import '../../css/h/hislmmgbp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pkynldbkl"/><path class="y_r_lzbqt"/><path class="hislmmgbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:result-old"} {...others} />);
}

export default Component;
