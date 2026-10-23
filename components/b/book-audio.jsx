import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pvkfy3b-g.css';
import '../../css/c/cmu8l1j2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pvkfy3b-g"/><path class="cmu8l1j2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:book-audio"} {...others} />);
}

export default Component;
