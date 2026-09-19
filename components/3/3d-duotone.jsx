import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxq-f2ctj.css';
import '../../css/t/tgu1ydvfg.css';
import '../../css/q/qfv_1c3oe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xxq-f2ctj"/><path class="tgu1ydvfg"/><path class="qfv_1c3oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:3d-duotone"} {...others} />);
}

export default Component;
