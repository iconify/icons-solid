import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jsoz6_bak.css';
import '../../css/o/o3qxykbdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jsoz6_bak"/><path class="o3qxykbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:monitor-fill"} {...others} />);
}

export default Component;
