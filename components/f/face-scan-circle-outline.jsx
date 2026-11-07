import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbp17eb1m.css';
import '../../css/x/xza96qbbg.css';
import '../../css/g/grj_h9ayp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hbp17eb1m"/><path class="xza96qbbg"/><path clip-rule="evenodd" class="grj_h9ayp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:face-scan-circle-outline"} {...others} />);
}

export default Component;
