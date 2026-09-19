import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bd-d2t_ig.css';
import '../../css/r/rieztmb7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="bd-d2t_ig"/><path class="rieztmb7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:camera-video"} {...others} />);
}

export default Component;
