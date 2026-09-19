import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sla-trbaw.css';
import '../../css/y/y56puac6x.css';
import '../../css/d/dmkk9tbyk.css';
import '../../css/a/auejspbti.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sla-trbaw"/><path class="y56puac6x"/><path class="dmkk9tbyk"/><path class="auejspbti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:camera-outline"} {...others} />);
}

export default Component;
