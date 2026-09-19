import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq9_gaclr.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/k/kpnimx1ru.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="dq9_gaclr"/><circle class="e39ud6bwf"/><circle class="kpnimx1ru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:overflow-menu-horizontal"} {...others} />);
}

export default Component;
