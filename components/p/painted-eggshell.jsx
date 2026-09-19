import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg937_1md.css';
import '../../css/b/bbthzgo7i.css';
import '../../css/j/jef6gtb-c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sg937_1md"/><path class="bbthzgo7i"/><path clip-rule="evenodd" class="jef6gtb-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:painted-eggshell"} {...others} />);
}

export default Component;
