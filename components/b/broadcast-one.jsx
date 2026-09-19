import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tpauxqbec.css';
import '../../css/e/ed5_y302y.css';
import '../../css/f/fw_40y71x.css';
import '../../css/e/em5bsmbgk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="h01tyzbfu"><path class="tpauxqbec"/><path class="ed5_y302y"/><path class="fw_40y71x"/><path class="em5bsmbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:broadcast-one"} {...others} />);
}

export default Component;
