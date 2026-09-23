import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ha84-bnhp.css';
import '../../css/y/yeeki1w9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ha84-bnhp"/><path class="yeeki1w9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:zap-sparkles"} {...others} />);
}

export default Component;
