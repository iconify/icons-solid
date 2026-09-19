import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m20u9ob6h.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="m20u9ob6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:css3-alt"} {...others} />);
}

export default Component;
