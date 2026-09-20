import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g48xyybcc.css';
import '../../css/h/hym4ejb0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g48xyybcc"/><path class="hym4ejb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:blender"} {...others} />);
}

export default Component;
