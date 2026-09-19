import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/ncz2z7b1j.css';
import '../../css/g/gwra3bc3h.css';
import '../../css/v/vfkibrbfi.css';
import '../../css/p/pq22b_k3h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ncz2z7b1j"/><path class="gwra3bc3h"/><path class="vfkibrbfi"/><path class="pq22b_k3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fork"} {...others} />);
}

export default Component;
