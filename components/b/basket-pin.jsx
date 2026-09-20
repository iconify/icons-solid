import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o87eodbjm.css';
import '../../css/e/e2ueievub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o87eodbjm"/><path class="e2ueievub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-pin"} {...others} />);
}

export default Component;
