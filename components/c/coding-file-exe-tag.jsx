import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrzhdwbpp.css';
import '../../css/d/dk5kzs9xf.css';
import '../../css/c/c04zuphpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nrzhdwbpp"/><path clip-rule="evenodd" class="dk5kzs9xf"/><path class="c04zuphpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:coding-file-exe-tag"} {...others} />);
}

export default Component;
