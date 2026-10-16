import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_qrf6bex.css';
import '../../css/b/bwg811bpd.css';
import '../../css/o/orqjejdjp.css';
import '../../css/v/vlrk2yboz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m_qrf6bex"/><path class="bwg811bpd"/><path class="orqjejdjp"/><path class="vlrk2yboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-cell-48-bold"} {...others} />);
}

export default Component;
