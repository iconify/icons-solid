import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjdit39oz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjdit39oz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:network-off-outline"} {...others} />);
}

export default Component;
