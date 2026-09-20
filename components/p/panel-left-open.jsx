import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kj0px1bqt.css';
import '../../css/f/fgjiv0bpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kj0px1bqt"/><path class="fgjiv0bpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:panel-left-open"} {...others} />);
}

export default Component;
