import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkipg-bnu.css';
import '../../css/e/etvxrubdo.css';
import '../../css/j/j_numcn-q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tkipg-bnu"/><path class="etvxrubdo"/><path class="j_numcn-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:enhanced-weathering-48"} {...others} />);
}

export default Component;
