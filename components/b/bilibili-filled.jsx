import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wiea140ii.css';
import '../../css/l/lbse-vh1e.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="n1lsf0bnc"><path class="wiea140ii"/><path class="lbse-vh1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bilibili-filled"} {...others} />);
}

export default Component;
