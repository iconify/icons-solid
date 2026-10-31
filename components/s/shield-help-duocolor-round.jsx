import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s96axeblp.css';
import '../../css/j/j0xa-mbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s96axeblp"/><path class="j0xa-mbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-help-duocolor-round"} {...others} />);
}

export default Component;
