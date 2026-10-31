import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tlzu35bzk.css';
import '../../css/t/t54msjkmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tlzu35bzk"/><path class="t54msjkmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flask-duocolor-round"} {...others} />);
}

export default Component;
