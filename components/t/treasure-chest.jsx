import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p8kribjwq.css';
import '../../css/f/fsz231bss.css';
import '../../css/k/k07vgq36i.css';
import '../../css/y/ymkfi9a7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="p8kribjwq"/><path class="fsz231bss"/><path class="k07vgq36i"/><path class="ymkfi9a7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:treasure-chest"} {...others} />);
}

export default Component;
