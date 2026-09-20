import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2vz4ubmz.css';
import '../../css/l/lewkgcwwi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="x2vz4ubmz"/><path class="lewkgcwwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:archive-box"} {...others} />);
}

export default Component;
