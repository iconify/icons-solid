import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x0ly9qlff.css';
import '../../css/p/pt7jicbll.css';
import '../../css/t/tf6vqhm2k.css';
import '../../css/k/kijpkcbzb.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow x0ly9qlff"/><path class="pt7jicbll wm-shadow"/><path class="tf6vqhm2k"/><path class="kijpkcbzb"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pin-off"} {...others} />);
}

export default Component;
