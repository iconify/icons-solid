import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfnqo82lz.css';
import '../../css/i/iuj2cybpw.css';
import '../../css/v/vdin1bcof.css';
import '../../css/u/uy7l63bvg.css';
import '../../css/g/gf1ijxbyw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tfnqo82lz"/><path class="iuj2cybpw"/><path class="vdin1bcof"/><path class="uy7l63bvg"/><path class="gf1ijxbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:graphite-48"} {...others} />);
}

export default Component;
