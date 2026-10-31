import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y63qk5bnv.css';
import '../../css/j/jn_kjsbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y63qk5bnv"/><path class="jn_kjsbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shower-duocolor-round"} {...others} />);
}

export default Component;
