import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-c8sjnky.css';
import '../../css/n/nq7kueb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k-c8sjnky"/><circle class="nq7kueb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-up-from-dot"} {...others} />);
}

export default Component;
