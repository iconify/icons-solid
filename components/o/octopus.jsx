import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o825azciz.css';
import '../../css/f/f45v-3b9f.css';
import '../../css/o/od9fx8b6h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o825azciz"/><path class="f45v-3b9f"/><path class="od9fx8b6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:octopus"} {...others} />);
}

export default Component;
