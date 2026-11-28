import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zyctw5lxf.css';
import '../../css/d/dn9-vgbis.css';
import '../../css/q/qyiz8wb3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zyctw5lxf"/><path class="dn9-vgbis"/><path class="qyiz8wb3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-chip"} {...others} />);
}

export default Component;
