import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ek-5x4b-q.css';
import '../../css/u/up2jjobfd.css';
import '../../css/c/csl93nbwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ek-5x4b-q"/><path class="up2jjobfd"/><path class="csl93nbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:blood-bag-cross"} {...others} />);
}

export default Component;
