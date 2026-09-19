import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkvt3bczz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="figma-logo-outline"><path class="(Stroke) Vector wkvt3bczz" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:figma-logo-outline"} {...others} />);
}

export default Component;
