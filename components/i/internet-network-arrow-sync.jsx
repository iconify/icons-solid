import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5brnbbhv.css';
import '../../css/v/vwa8do-ok.css';
import '../../css/i/i88vk8anl.css';
import '../../css/k/kah05bc0t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l5brnbbhv"/><path class="vwa8do-ok"/><path class="i88vk8anl"/><path class="kah05bc0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:internet-network-arrow-sync"} {...others} />);
}

export default Component;
