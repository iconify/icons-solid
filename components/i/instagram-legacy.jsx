import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-swyr_3z.css';

const viewBox = {"width":512,"height":146};
const content = `<path class="v-swyr_3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:instagram-legacy"} {...others} />);
}

export default Component;
