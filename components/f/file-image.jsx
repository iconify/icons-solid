import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qfl7jkbal.css';
import '../../css/f/fa1ze17ua.css';
import '../../css/p/pao8-px4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qfl7jkbal"/><path class="fa1ze17ua"/><path class="pao8-px4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-image"} {...others} />);
}

export default Component;
