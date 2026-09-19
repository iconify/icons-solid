import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/rllozbc5c.css';
import '../../css/v/vumjnp3nn.css';
import '../../css/k/k2wa0ukpt.css';
import '../../css/p/p76ps17cq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="rllozbc5c"/><path class="vumjnp3nn"/><path class="k2wa0ukpt"/><path class="p76ps17cq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:at-sign"} {...others} />);
}

export default Component;
