import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x796-ibjq.css';
import '../../css/p/p9q1s25cr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x796-ibjq"/><path class="p9q1s25cr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:chart-radar"} {...others} />);
}

export default Component;
