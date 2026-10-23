import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ciq5y6qmo.css';
import '../../css/v/v6k7bebpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ciq5y6qmo"/><path class="v6k7bebpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:receipt-swiss-franc"} {...others} />);
}

export default Component;
