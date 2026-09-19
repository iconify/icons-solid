import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/smw8xmqtj.css';
import '../../css/l/ly3wpy45t.css';
import '../../css/z/zzopqyboz.css';
import '../../css/n/nr7gnttmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="smw8xmqtj"/><path class="ly3wpy45t"/><path class="zzopqyboz"/><path class="nr7gnttmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tram"} {...others} />);
}

export default Component;
