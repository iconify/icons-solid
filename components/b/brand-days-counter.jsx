import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tw1ta94dk.css';
import '../../css/k/k8-xzqb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tw1ta94dk"/><path class="k8-xzqb8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-days-counter"} {...others} />);
}

export default Component;
