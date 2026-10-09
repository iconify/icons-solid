import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbnuryord.css';
import '../../css/d/ddoez_smv.css';
import '../../css/z/z36fjojcj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tbnuryord"/><path class="ddoez_smv"/><path class="z36fjojcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:inspection-48"} {...others} />);
}

export default Component;
