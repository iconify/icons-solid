import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftltwgbpa.css';
import '../../css/l/lw030accp.css';
import '../../css/n/nye0mhklj.css';
import '../../css/f/ftusl_zbz.css';
import '../../css/b/by2jy7bvc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ftltwgbpa"/><path class="lw030accp"/><path class="nye0mhklj"/><path class="ftusl_zbz"/><path class="by2jy7bvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drone-48"} {...others} />);
}

export default Component;
