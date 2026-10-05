import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/si5x7ftvb.css';
import '../../css/n/nkup55_nc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="si5x7ftvb"/><path class="nkup55_nc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:compass"} {...others} />);
}

export default Component;
