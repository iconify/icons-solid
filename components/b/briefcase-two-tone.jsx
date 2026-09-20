import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7fhqy1lz.css';
import '../../css/z/zh0bxlbcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g7fhqy1lz"/><path class="zh0bxlbcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:briefcase-two-tone"} {...others} />);
}

export default Component;
