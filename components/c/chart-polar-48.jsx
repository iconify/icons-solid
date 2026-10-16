import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dswdeubsf.css';
import '../../css/j/jfstv-bgx.css';
import '../../css/f/fajgjy8bi.css';
import '../../css/d/d3mkw_b_b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dswdeubsf"/><path class="jfstv-bgx"/><path class="fajgjy8bi"/><path class="d3mkw_b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-polar-48"} {...others} />);
}

export default Component;
