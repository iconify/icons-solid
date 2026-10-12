import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4pd2ri0n.css';
import '../../css/p/ppje3ihbl.css';
import '../../css/l/lxhwf4tqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d4pd2ri0n"/><path class="ppje3ihbl"/><path class="lxhwf4tqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-check"} {...others} />);
}

export default Component;
