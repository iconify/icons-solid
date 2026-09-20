import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxklc_70n.css';
import '../../css/t/t2-7ux7cc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jxklc_70n"/><path class="t2-7ux7cc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-ramp-right-3"} {...others} />);
}

export default Component;
