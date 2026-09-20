import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cxdqyo3lq.css';
import '../../css/c/cmx0q-b3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cxdqyo3lq"/><path class="cmx0q-b3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hours-24"} {...others} />);
}

export default Component;
