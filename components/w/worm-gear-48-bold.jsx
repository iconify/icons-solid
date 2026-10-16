import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8spygx2w.css';
import '../../css/r/rjrkgcc1w.css';
import '../../css/l/lxpqrmtxo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a8spygx2w"/><path class="rjrkgcc1w"/><path class="lxpqrmtxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:worm-gear-48-bold"} {...others} />);
}

export default Component;
