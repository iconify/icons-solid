import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk8e_lbql.css';
import '../../css/k/kkpkbbccb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vk8e_lbql"/><path class="kkpkbbccb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:haze-line"} {...others} />);
}

export default Component;
