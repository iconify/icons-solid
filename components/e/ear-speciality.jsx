import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/i6rcbyehf.css';
import '../../css/w/w3kpw807z.css';
import '../../css/z/z8o5x23ot.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="i6rcbyehf"/><path class="w3kpw807z"/><path class="z8o5x23ot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ear-speciality"} {...others} />);
}

export default Component;
