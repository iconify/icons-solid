import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/l/l9ys1q0yl.css';
import '../../css/z/zk3nxfb9f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="l9ys1q0yl"/><path class="zk3nxfb9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-round-left"} {...others} />);
}

export default Component;
