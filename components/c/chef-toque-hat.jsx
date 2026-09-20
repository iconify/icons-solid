import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/g/gcvw7cieq.css';
import '../../css/s/stydhp2ni.css';
import '../../css/u/u88gntbpd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="gcvw7cieq"/><path class="stydhp2ni"/><path class="u88gntbpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chef-toque-hat"} {...others} />);
}

export default Component;
