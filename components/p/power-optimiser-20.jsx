import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h99zlyu1o.css';
import '../../css/r/rfb36bc4u.css';
import '../../css/f/fhp3j8bfa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h99zlyu1o"/><path class="rfb36bc4u"/><path class="fhp3j8bfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-optimiser-20"} {...others} />);
}

export default Component;
