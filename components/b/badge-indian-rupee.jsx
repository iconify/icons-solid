import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ug-s88biv.css';
import '../../css/c/c_9kcibbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ug-s88biv"/><path class="c_9kcibbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:badge-indian-rupee"} {...others} />);
}

export default Component;
