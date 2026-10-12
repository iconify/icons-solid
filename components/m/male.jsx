import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q86cy9bkh.css';
import '../../css/p/pkobubcjx.css';
import '../../css/o/os6sxy2_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="q86cy9bkh"/><circle class="pkobubcjx"/><path class="os6sxy2_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:male"} {...others} />);
}

export default Component;
