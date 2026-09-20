import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om86e5bdk.css';
import '../../css/v/vfhujpbju.css';
import '../../css/j/jfd0h_bdk.css';
import '../../css/h/hhhzdkbwh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="om86e5bdk"/><path class="vfhujpbju"/><path class="jfd0h_bdk"/><path class="hhhzdkbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:hack"} {...others} />);
}

export default Component;
