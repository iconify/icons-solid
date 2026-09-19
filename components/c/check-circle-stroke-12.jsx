import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/d4l60oblr.css';
import '../../css/u/uf8-wnb5o.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><path class="d4l60oblr"/><circle class="uf8-wnb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-circle-stroke-12"} {...others} />);
}

export default Component;
