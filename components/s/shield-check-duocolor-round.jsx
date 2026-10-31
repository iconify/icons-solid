import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3emery0c.css';
import '../../css/j/j0xa-mbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n3emery0c"/><path class="j0xa-mbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-check-duocolor-round"} {...others} />);
}

export default Component;
