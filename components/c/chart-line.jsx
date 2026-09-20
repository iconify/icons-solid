import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqfo8ifwt.css';
import '../../css/e/ef42dcbgs.css';
import '../../css/a/azuny7xti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqfo8ifwt"/><path class="ef42dcbgs"/><path class="azuny7xti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:chart-line"} {...others} />);
}

export default Component;
