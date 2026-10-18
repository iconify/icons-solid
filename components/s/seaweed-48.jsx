import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o60fd0ylo.css';
import '../../css/n/najn_bcni.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o60fd0ylo"/><path class="najn_bcni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seaweed-48"} {...others} />);
}

export default Component;
