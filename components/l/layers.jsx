import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cb89wsg7d.css';
import '../../css/g/g3tbz9iqf.css';
import '../../css/y/ydll70ntu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cb89wsg7d"/><path clip-rule="evenodd" class="g3tbz9iqf"/><path clip-rule="evenodd" class="ydll70ntu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:layers"} {...others} />);
}

export default Component;
