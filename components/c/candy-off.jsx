import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tn-e949se.css';
import '../../css/c/cqtzmobsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tn-e949se"/><path class="cqtzmobsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:candy-off"} {...others} />);
}

export default Component;
