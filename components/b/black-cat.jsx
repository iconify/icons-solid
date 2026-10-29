import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxpb80bjk.css';
import '../../css/x/xjj57vife.css';
import '../../css/f/fhns2vbpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hxpb80bjk"/><path class="xjj57vife"/><path class="fhns2vbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:black-cat"} {...others} />);
}

export default Component;
