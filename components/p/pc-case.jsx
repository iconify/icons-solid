import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tkgv32aug.css';
import '../../css/y/yfzz-qb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tkgv32aug"/><path class="yfzz-qb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:pc-case"} {...others} />);
}

export default Component;
