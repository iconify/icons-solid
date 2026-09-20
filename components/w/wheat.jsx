import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c8kru0bnv.css';
import '../../css/o/oghbaxbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c8kru0bnv"/><path class="oghbaxbqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:wheat"} {...others} />);
}

export default Component;
