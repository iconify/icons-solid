import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mnu2-k30d.css';
import '../../css/d/d6-na4hox.css';
import '../../css/u/uxt92d_4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mnu2-k30d"/><path class="d6-na4hox"/><path class="uxt92d_4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:exercise-ball"} {...others} />);
}

export default Component;
