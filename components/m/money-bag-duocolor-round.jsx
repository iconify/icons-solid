import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oj5n083ag.css';
import '../../css/g/g5tsn9vds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oj5n083ag"/><path class="g5tsn9vds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:money-bag-duocolor-round"} {...others} />);
}

export default Component;
