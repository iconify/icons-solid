import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzh-h4k4i.css';
import '../../css/o/op16wnoyd.css';
import '../../css/k/k81m4nfaf.css';
import '../../css/q/qiusj_lre.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jzh-h4k4i"/><path class="op16wnoyd"/><path class="k81m4nfaf"/><path class="qiusj_lre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-well-48"} {...others} />);
}

export default Component;
