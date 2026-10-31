import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jf-xq3dua.css';
import '../../css/h/hmy55ry8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jf-xq3dua"/><path class="hmy55ry8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:signal-medium-duocolor-round"} {...others} />);
}

export default Component;
