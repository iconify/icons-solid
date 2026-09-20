import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh4b1qbqb.css';
import '../../css/n/ncb41obml.css';
import '../../css/v/vsys1sbsv.css';
import '../../css/x/xkeupocbm.css';
import '../../css/i/iyk1-sbvz.css';
import '../../css/c/cgwd3ibqx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vh4b1qbqb"/><path class="ncb41obml"/><path class="vsys1sbsv"/><path class="xkeupocbm"/><path class="iyk1-sbvz"/><path class="cgwd3ibqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:pen-tool"} {...others} />);
}

export default Component;
