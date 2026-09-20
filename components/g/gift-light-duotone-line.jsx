import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ox0o3i-6z.css';
import '../../css/d/dki44hrzy.css';
import '../../css/h/hr2pqzbez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ox0o3i-6z"/><path class="dki44hrzy"/><path class="hr2pqzbez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:gift-light-duotone-line"} {...others} />);
}

export default Component;
