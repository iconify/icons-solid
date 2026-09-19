import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc9bi-5wd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hc9bi-5wd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:card"} {...others} />);
}

export default Component;
