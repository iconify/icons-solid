import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxj2tvb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxj2tvb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:sliders-v-light"} {...others} />);
}

export default Component;
