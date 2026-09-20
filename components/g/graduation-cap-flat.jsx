import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipquq5qkq.css';
import '../../css/f/fm-h1bcoi.css';
import '../../css/o/orebrnjdr.css';
import '../../css/g/gs_7u5m-w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ipquq5qkq"/><path class="fm-h1bcoi"/><path class="orebrnjdr"/><path class="gs_7u5m-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:graduation-cap-flat"} {...others} />);
}

export default Component;
