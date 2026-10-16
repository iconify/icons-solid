import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbe2gqb6b.css';
import '../../css/l/l1-9pdbrq.css';
import '../../css/k/k8wf0kv_j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kbe2gqb6b"/><path class="l1-9pdbrq"/><path class="k8wf0kv_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-compressor-48"} {...others} />);
}

export default Component;
