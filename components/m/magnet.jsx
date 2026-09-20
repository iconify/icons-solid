import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wjwunyqio.css';
import '../../css/h/hvwfll0ah.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path clip-rule="evenodd" class="wjwunyqio"/><path class="hvwfll0ah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:magnet"} {...others} />);
}

export default Component;
