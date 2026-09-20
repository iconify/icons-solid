import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggbltf6qz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggbltf6qz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:avalanche"} {...others} />);
}

export default Component;
