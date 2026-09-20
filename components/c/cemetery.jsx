import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm0rmt9ol.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="fm0rmt9ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:cemetery"} {...others} />);
}

export default Component;
