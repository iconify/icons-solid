import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c9je85bmy.css';
import '../../css/i/i0x9plbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c9je85bmy"/><path class="i0x9plbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:key-round"} {...others} />);
}

export default Component;
