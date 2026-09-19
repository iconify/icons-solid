import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq44mglgu.css';
import '../../css/s/sobdcvb0f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cq44mglgu weblate-plain-st0"/><path class="sobdcvb0f weblate-plain-st0"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:weblate"} {...others} />);
}

export default Component;
