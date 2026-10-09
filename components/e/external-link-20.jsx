import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmi3g-t-d.css';
import '../../css/u/um9t76b7s.css';
import '../../css/c/cd_6icd4r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tmi3g-t-d"/><path class="um9t76b7s"/><path class="cd_6icd4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:external-link-20"} {...others} />);
}

export default Component;
