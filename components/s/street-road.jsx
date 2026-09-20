import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/paefs-daw.css';
import '../../css/y/y83ejubfa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="paefs-daw"/><path class="y83ejubfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:street-road"} {...others} />);
}

export default Component;
