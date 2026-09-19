import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nqhby9b4x.css';
import '../../css/v/vn8zh-asp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="nqhby9b4x"/><path class="vn8zh-asp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-down-left"} {...others} />);
}

export default Component;
