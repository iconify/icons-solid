import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vwtlgbhlv.css';
import '../../css/x/x-oeo5lde.css';
import '../../css/x/x1fksccrt.css';
import '../../css/d/dfqro5y3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="vwtlgbhlv"/><circle class="x-oeo5lde"/><circle class="x1fksccrt"/><path class="dfqro5y3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:git-fork-line"} {...others} />);
}

export default Component;
