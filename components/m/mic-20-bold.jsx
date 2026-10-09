import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uih-zwlau.css';
import '../../css/p/pc3rltyei.css';
import '../../css/r/rltagccoa.css';
import '../../css/a/an84ox-sq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uih-zwlau"/><path class="pc3rltyei"/><path class="rltagccoa"/><path class="an84ox-sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mic-20-bold"} {...others} />);
}

export default Component;
