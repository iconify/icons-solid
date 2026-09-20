import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-h2_abdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-h2_abdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:clear-reverse-outline"} {...others} />);
}

export default Component;
