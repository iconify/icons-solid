import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmunasb2f.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/e4fplvyta.css';
import '../../css/m/mfcab4xzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmunasb2f"/><g class="xtpeb-edw"><path clip-rule="evenodd" class="e4fplvyta"/><path class="mfcab4xzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:calendar-end-duotone"} {...others} />);
}

export default Component;
