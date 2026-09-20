import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tiu4lcw5h.css';
import '../../css/e/e0la5wsre.css';
import '../../css/r/rz3ur5bsf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tiu4lcw5h"/><path class="e0la5wsre"/><ellipse class="rz3ur5bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:exclamation-triangle"} {...others} />);
}

export default Component;
