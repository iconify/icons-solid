import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a73tdzbgv.css';
import '../../css/b/bx8_srscf.css';
import '../../css/g/g6995qb1j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="a73tdzbgv"/><path class="bx8_srscf"/><path class="g6995qb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vacation"} {...others} />);
}

export default Component;
