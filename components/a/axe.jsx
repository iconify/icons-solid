import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k9mlrab2e.css';
import '../../css/o/otx7754gq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k9mlrab2e"/><path class="otx7754gq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:axe"} {...others} />);
}

export default Component;
