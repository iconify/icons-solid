import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/swzvif2pt.css';
import '../../css/d/d87521bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="swzvif2pt"/><path class="d87521bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-minus"} {...others} />);
}

export default Component;
