import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xi4en0b-m.css';
import '../../css/b/boggkqmuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xi4en0b-m"/><path class="boggkqmuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-question"} {...others} />);
}

export default Component;
