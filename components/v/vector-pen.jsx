import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f19hmrzcz.css';
import '../../css/q/qyetxgbje.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="f19hmrzcz"/><path class="qyetxgbje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:vector-pen"} {...others} />);
}

export default Component;
