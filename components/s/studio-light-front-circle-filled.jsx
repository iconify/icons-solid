import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/b/b7wscybiu.css';
import '../../css/j/jjo_i9bfb.css';
import '../../css/t/tg14sl-9g.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGkvhMge9i"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="b7wscybiu"/><path class="jjo_i9bfb"/><path class="tg14sl-9g"/></g></mask></defs><circle mask="url(#SVGkvhMge9i)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:studio-light-front-circle-filled"} {...others} />);
}

export default Component;
