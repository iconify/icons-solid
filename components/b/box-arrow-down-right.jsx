import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fe65c1b7v.css';
import '../../css/s/scwoigb1z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fe65c1b7v"/><path class="scwoigb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-down-right"} {...others} />);
}

export default Component;
