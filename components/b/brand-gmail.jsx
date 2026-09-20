import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q_jbl3b2o.css';
import '../../css/x/xyij-ab5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q_jbl3b2o"/><path class="xyij-ab5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-gmail"} {...others} />);
}

export default Component;
