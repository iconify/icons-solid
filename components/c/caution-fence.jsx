import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt3hqnohm.css';
import '../../css/j/j85dr9jmk.css';
import '../../css/n/n6_nr2y0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yt3hqnohm"/><path class="j85dr9jmk"/><path class="n6_nr2y0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:caution-fence"} {...others} />);
}

export default Component;
