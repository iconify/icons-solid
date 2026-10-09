import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khd4an8mp.css';
import '../../css/d/dqca1ac-v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="khd4an8mp"/><path class="dqca1ac-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biofuel-48-bold"} {...others} />);
}

export default Component;
