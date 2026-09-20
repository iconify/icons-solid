import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8fwsc81h.css';
import '../../css/j/jcqbpq0op.css';
import '../../css/x/x8l11yg9a.css';
import '../../css/x/xiby4z7mg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z8fwsc81h"/><path class="jcqbpq0op"/><path class="x8l11yg9a"/><path class="xiby4z7mg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-minimalistic-input-outline"} {...others} />);
}

export default Component;
