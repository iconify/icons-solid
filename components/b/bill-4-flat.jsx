import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgpsbdc7o.css';
import '../../css/w/w5eqxnb7r.css';
import '../../css/r/ra8qqac_x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xgpsbdc7o"/><path class="w5eqxnb7r"/><path clip-rule="evenodd" class="ra8qqac_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:bill-4-flat"} {...others} />);
}

export default Component;
