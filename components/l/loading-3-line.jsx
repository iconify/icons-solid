import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz6lu0z5m.css';
import '../../css/l/lfanpcblh.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="zz6lu0z5m"/><path class="lfanpcblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:loading-3-line"} {...others} />);
}

export default Component;
