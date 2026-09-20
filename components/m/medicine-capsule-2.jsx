import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usal1bbef.css';
import '../../css/b/bwab5db4f.css';
import '../../css/h/h92mtkbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="usal1bbef"/><path class="bwab5db4f"/><path class="h92mtkbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:medicine-capsule-2"} {...others} />);
}

export default Component;
