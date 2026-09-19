import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/v8t7a0big.css';
import '../../css/q/qxv7eobba.css';
import '../../css/t/tmt8sqbls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="v8t7a0big"/><path class="qxv7eobba"/><path class="tmt8sqbls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wrench-01"} {...others} />);
}

export default Component;
