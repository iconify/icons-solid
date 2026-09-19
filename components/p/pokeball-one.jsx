import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnp73_ylh.css';
import '../../css/r/rfsvcqblw.css';
import '../../css/z/zwzflvbzy.css';
import '../../css/t/tbfjszvql.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cnp73_ylh"/><circle class="rfsvcqblw"/><path class="zwzflvbzy"/><circle class="tbfjszvql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pokeball-one"} {...others} />);
}

export default Component;
