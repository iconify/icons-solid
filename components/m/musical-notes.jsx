import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwuvu9b4i.css';
import '../../css/t/tdietctib.css';
import '../../css/o/om-bzm87k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="hwuvu9b4i"><path class="tdietctib"/><path class="om-bzm87k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:musical-notes"} {...others} />);
}

export default Component;
