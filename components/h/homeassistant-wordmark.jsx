import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx3sflbzb.css';
import '../../css/f/fntwqg-7t.css';
import '../../css/b/blgoysbln.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yx3sflbzb"/><path class="fntwqg-7t"/><path class="blgoysbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:homeassistant-wordmark"} {...others} />);
}

export default Component;
