import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fr31nyphc.css';
import '../../css/q/qev--gu9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fr31nyphc"/><path class="qev--gu9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:olympics"} {...others} />);
}

export default Component;
