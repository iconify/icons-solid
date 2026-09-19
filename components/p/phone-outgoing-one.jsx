import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k_n38-uqo.css';
import '../../css/u/uj6jun1kw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="k_n38-uqo"/><path class="uj6jun1kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:phone-outgoing-one"} {...others} />);
}

export default Component;
