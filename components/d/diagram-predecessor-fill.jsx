import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k6eejabpo.css';
import '../../css/g/g_8sig3wa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k6eejabpo"/><path class="g_8sig3wa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-predecessor-fill"} {...others} />);
}

export default Component;
