import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjtk3-bur.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="wjtk3-bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:creative-commons-sampling-plus"} {...others} />);
}

export default Component;
