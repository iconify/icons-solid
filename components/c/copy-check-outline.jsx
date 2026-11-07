import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjjac2bhg.css';
import '../../css/e/egvbavgae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qjjac2bhg"/><path clip-rule="evenodd" class="egvbavgae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:copy-check-outline"} {...others} />);
}

export default Component;
