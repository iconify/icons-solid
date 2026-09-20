import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzg3gsb0o.css';
import '../../css/w/wmv27pbsg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mzg3gsb0o"/><path clip-rule="evenodd" class="wmv27pbsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:street-road-flat"} {...others} />);
}

export default Component;
