import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk3a4_bsk.css';
import '../../css/x/xdr5wfo2x.css';
import '../../css/j/jpt088bte.css';
import '../../css/x/xvcvy83wb.css';
import '../../css/f/f-z0o8b2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lk3a4_bsk"/><path class="xdr5wfo2x"/><path class="jpt088bte"/><path class="xvcvy83wb"/><path class="f-z0o8b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:figma"} {...others} />);
}

export default Component;
