import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdclrrbld.css';
import '../../css/z/zrqa_4kry.css';
import '../../css/j/j0szhnrrq.css';
import '../../css/d/dlcn8obnt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kdclrrbld"/><path class="zrqa_4kry"/><path class="j0szhnrrq"/><path class="dlcn8obnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soil-carbon-48-bold"} {...others} />);
}

export default Component;
