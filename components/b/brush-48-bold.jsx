import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cywpx4aix.css';
import '../../css/p/pqk-h9_8w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cywpx4aix"/><path class="pqk-h9_8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brush-48-bold"} {...others} />);
}

export default Component;
