import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb88n8bfw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gb88n8bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:firefox-browser"} {...others} />);
}

export default Component;
