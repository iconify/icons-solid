import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dvssgz61n.css';
import '../../css/e/enu23zbgq.css';
import '../../css/p/parzbjbsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dvssgz61n"/><path class="enu23zbgq"/><path class="parzbjbsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-notion"} {...others} />);
}

export default Component;
