import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pq-eznohw.css';
import '../../css/p/plqkxebjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pq-eznohw"/><path class="plqkxebjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-elbow-left"} {...others} />);
}

export default Component;
