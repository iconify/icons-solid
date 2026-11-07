import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di081o1ve.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/x_5vmjivq.css';
import '../../css/m/mx38t0sgx.css';
import '../../css/a/ab65tvput.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="di081o1ve"/><g class="xtpeb-edw"><path class="x_5vmjivq"/><path class="mx38t0sgx"/><path class="ab65tvput"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rainbow-bold-duotone"} {...others} />);
}

export default Component;
