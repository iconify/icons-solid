import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d_4ikg2gj.css';
import '../../css/z/zp-stnbon.css';
import '../../css/k/k4g8l4bne.css';
import '../../css/s/sgzl7tb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d_4ikg2gj wm-shadow"/><path class="wm-shadow zp-stnbon"/><path class="k4g8l4bne"/><path class="sgzl7tb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:file-input"} {...others} />);
}

export default Component;
