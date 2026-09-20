import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvtel8-ja.css';
import '../../css/u/uf4tnbbqf.css';
import '../../css/v/vh8sm6mni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uvtel8-ja"/><path class="uf4tnbbqf"/><path class="vh8sm6mni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:settings-hammer"} {...others} />);
}

export default Component;
