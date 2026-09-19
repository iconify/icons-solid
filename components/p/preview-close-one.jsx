import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/han2_ccwu.css';
import '../../css/m/meemeybxw.css';
import '../../css/t/tlqqge7uq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="han2_ccwu"/><path class="meemeybxw"/><path class="tlqqge7uq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:preview-close-one"} {...others} />);
}

export default Component;
