import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wr2yl5bsj.css';
import '../../css/n/n4qmv4bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wr2yl5bsj"/><path class="n4qmv4bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:drag-drop"} {...others} />);
}

export default Component;
