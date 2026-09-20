import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpi9kab-u.css';
import '../../css/k/kpwcb-rgl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wpi9kab-u"/><path class="kpwcb-rgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:wireless-disabled-16"} {...others} />);
}

export default Component;
