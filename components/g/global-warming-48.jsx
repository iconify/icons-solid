import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmj85obju.css';
import '../../css/o/oj51yuuri.css';
import '../../css/d/dede64x5j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zmj85obju"/><path class="oj51yuuri"/><path class="dede64x5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:global-warming-48"} {...others} />);
}

export default Component;
