import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qst8sacvr.css';
import '../../css/n/ncpk28ife.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qst8sacvr"/><path class="ncpk28ife"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dosimeter-48"} {...others} />);
}

export default Component;
