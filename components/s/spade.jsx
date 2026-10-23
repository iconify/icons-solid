import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nie4ck4jr.css';
import '../../css/c/ccws5rb3a.css';
import '../../css/n/n2ea0o7ot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nie4ck4jr"/><path class="ccws5rb3a"/><path class="n2ea0o7ot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:spade"} {...others} />);
}

export default Component;
