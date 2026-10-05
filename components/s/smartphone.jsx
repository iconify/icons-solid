import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/dsos9butg.css';
import '../../css/y/yksksbbsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="dsos9butg"/><path class="yksksbbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:smartphone"} {...others} />);
}

export default Component;
