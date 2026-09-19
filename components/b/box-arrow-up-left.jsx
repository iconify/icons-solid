import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jqu5l21mg.css';
import '../../css/u/uoth9opzu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="jqu5l21mg"/><path class="uoth9opzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-up-left"} {...others} />);
}

export default Component;
