import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww36v96hh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ww36v96hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:settings-sparkle-round"} {...others} />);
}

export default Component;
