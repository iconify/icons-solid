import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myw4k0vkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pause-outline"><path class="Vector myw4k0vkw" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:pause-outline"} {...others} />);
}

export default Component;
