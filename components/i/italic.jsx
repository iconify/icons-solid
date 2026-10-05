import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/icgtmkcqv.css';
import '../../css/v/vgp1y8-te.css';
import '../../css/m/m0060_lza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="icgtmkcqv"/><path class="vgp1y8-te"/><path class="m0060_lza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:italic"} {...others} />);
}

export default Component;
