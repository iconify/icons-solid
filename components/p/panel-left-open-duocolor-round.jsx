import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mlo5-tbia.css';
import '../../css/z/zwj-p0bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mlo5-tbia"/><path class="zwj-p0bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-left-open-duocolor-round"} {...others} />);
}

export default Component;
