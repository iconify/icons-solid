import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gl9hzw-en.css';
import '../../css/h/hh8mg9bzb.css';
import '../../css/u/u8ydsibgl.css';
import '../../css/q/qhupwp_8j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="gl9hzw-en"/><path class="hh8mg9bzb"/><path class="u8ydsibgl"/><path class="qhupwp_8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:global-learning"} {...others} />);
}

export default Component;
