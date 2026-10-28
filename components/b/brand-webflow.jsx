import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d5jbzvbdi.css';
import '../../css/c/cq4ngac1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d5jbzvbdi"/><path class="cq4ngac1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-webflow"} {...others} />);
}

export default Component;
