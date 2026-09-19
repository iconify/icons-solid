import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0qybk50m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h0qybk50m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:controller-jump-to-start"} {...others} />);
}

export default Component;
