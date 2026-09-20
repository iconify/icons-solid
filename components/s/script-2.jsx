import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/k/kppe_kh7g.css';
import '../../css/h/hvrjix_hn.css';
import '../../css/k/ko3k3-g7k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="kppe_kh7g"/><path class="hvrjix_hn"/><path class="ko3k3-g7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:script-2"} {...others} />);
}

export default Component;
