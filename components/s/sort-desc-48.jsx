import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhifx_scc.css';
import '../../css/g/gyvla6x2p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bhifx_scc"/><path class="gyvla6x2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-desc-48"} {...others} />);
}

export default Component;
