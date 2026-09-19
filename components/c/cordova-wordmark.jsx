import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duyp1yy5b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="duyp1yy5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:cordova-wordmark"} {...others} />);
}

export default Component;
