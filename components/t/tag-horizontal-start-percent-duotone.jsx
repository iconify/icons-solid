import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ak-drqc-a.css';
import '../../css/e/es_f_abip.css';
import '../../css/q/qg4ud0b0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ak-drqc-a"/><path class="es_f_abip"/><path class="qg4ud0b0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tag-horizontal-start-percent-duotone"} {...others} />);
}

export default Component;
