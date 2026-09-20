import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dqapyabwu.css';
import '../../css/r/rukdu3vsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="dqapyabwu"/><path class="rukdu3vsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:letters-case"} {...others} />);
}

export default Component;
