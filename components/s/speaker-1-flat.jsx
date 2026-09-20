import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvzxmabom.css';
import '../../css/b/bhbipcf1s.css';
import '../../css/j/jm6z8vbix.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hvzxmabom"/><path class="bhbipcf1s"/><path class="jm6z8vbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:speaker-1-flat"} {...others} />);
}

export default Component;
