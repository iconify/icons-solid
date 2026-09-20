import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q-3a-0i9k.css';
import '../../css/j/j8bzfxbok.css';
import '../../css/p/p2du7ibqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q-3a-0i9k"/><path class="j8bzfxbok"/><path class="p2du7ibqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:network-router-signal-double"} {...others} />);
}

export default Component;
