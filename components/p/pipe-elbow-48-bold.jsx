import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pql4robbq.css';
import '../../css/s/sqhb9ua0d.css';
import '../../css/k/kh7aeobnj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pql4robbq"/><path class="sqhb9ua0d"/><path class="kh7aeobnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-elbow-48-bold"} {...others} />);
}

export default Component;
