import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vg1txhbza.css';
import '../../css/m/mvzwxxxnr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="vg1txhbza"/><path class="mvzwxxxnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:wallet-two"} {...others} />);
}

export default Component;
