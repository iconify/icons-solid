import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mf_6sfbxp.css';
import '../../css/h/h9_phyo5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mf_6sfbxp"/><path class="h9_phyo5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ball-baseball"} {...others} />);
}

export default Component;
