import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzj6chbuh.css';
import '../../css/r/rjv6740ri.css';
import '../../css/h/h6o3uyb1z.css';
import '../../css/k/kqzeh81us.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tzj6chbuh"/><path class="rjv6740ri"/><path class="h6o3uyb1z"/><path class="kqzeh81us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recycle-48"} {...others} />);
}

export default Component;
