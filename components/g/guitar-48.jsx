import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdc73lbzg.css';
import '../../css/u/uqg7dcvvc.css';
import '../../css/k/kareh6bge.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bdc73lbzg"/><path class="uqg7dcvvc"/><path class="kareh6bge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:guitar-48"} {...others} />);
}

export default Component;
