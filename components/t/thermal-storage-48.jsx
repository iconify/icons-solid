import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf74hnsol.css';
import '../../css/e/e215zmbyo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nf74hnsol"/><path class="e215zmbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-storage-48"} {...others} />);
}

export default Component;
