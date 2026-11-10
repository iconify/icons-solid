import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/ng6-m7bga.css';
import '../../css/f/fvsc52n_o.css';
import '../../css/u/u-smc2b1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ng6-m7bga"/><path class="fvsc52n_o"/><path class="u-smc2b1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:pi-capital"} {...others} />);
}

export default Component;
