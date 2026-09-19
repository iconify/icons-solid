import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg6zfdsmf.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="eg6zfdsmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:toggle-off"} {...others} />);
}

export default Component;
