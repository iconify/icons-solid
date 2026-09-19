import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah-h2x4ww.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ah-h2x4ww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:phoenix-framework"} {...others} />);
}

export default Component;
