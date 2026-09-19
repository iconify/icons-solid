import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zbsa-ujvj.css';
import '../../css/j/j_gspgb6o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zbsa-ujvj"/><path class="j_gspgb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:kettle-one"} {...others} />);
}

export default Component;
