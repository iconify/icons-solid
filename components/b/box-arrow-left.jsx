import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qef6nwkbg.css';
import '../../css/k/k-v4ombfc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="qef6nwkbg"/><path class="k-v4ombfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-left"} {...others} />);
}

export default Component;
