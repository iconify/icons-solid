import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7ce7pzkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7ce7pzkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:power-plug-outline"} {...others} />);
}

export default Component;
