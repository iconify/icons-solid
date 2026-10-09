import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkje3ybpz.css';
import '../../css/u/u90tapbtx.css';
import '../../css/n/neiwdiudh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gkje3ybpz"/><path class="u90tapbtx"/><path class="neiwdiudh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zoom-in-48"} {...others} />);
}

export default Component;
