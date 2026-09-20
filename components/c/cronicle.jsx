import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk3q6nbal.css';
import '../../css/z/z1mt3ubli.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vk3q6nbal"/><path class="z1mt3ubli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cronicle"} {...others} />);
}

export default Component;
