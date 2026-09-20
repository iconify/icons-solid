import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vikd8bchq.css';
import '../../css/c/cpxtojael.css';
import '../../css/k/kl9phus4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vikd8bchq"/><path class="cpxtojael"/><path clip-rule="evenodd" class="kl9phus4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:browser-key-flat"} {...others} />);
}

export default Component;
