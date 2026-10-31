import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ymmdjbbac.css';
import '../../css/c/codnblbpf.css';
import '../../css/c/cw4b7wb_u.css';
import '../../css/y/yu-mbdbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow ymmdjbbac"/><path class="codnblbpf wm-shadow"/><path class="cw4b7wb_u"/><path class="yu-mbdbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:corner-up-right"} {...others} />);
}

export default Component;
