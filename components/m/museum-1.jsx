import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hgihzbcda.css';
import '../../css/a/akyg5n59t.css';
import '../../css/a/am2b0kbai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hgihzbcda"/><path class="akyg5n59t"/><path class="am2b0kbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:museum-1"} {...others} />);
}

export default Component;
