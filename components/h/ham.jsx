import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x0dmzccsn.css';
import '../../css/q/qc1-0n5qc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x0dmzccsn"/><path class="qc1-0n5qc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:ham"} {...others} />);
}

export default Component;
