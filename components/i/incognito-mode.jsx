import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/f/fv4iqs0io.css';
import '../../css/h/huug6ebpa.css';
import '../../css/j/jyflo82pl.css';
import '../../css/q/qo19wnb-f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="fv4iqs0io"/><path class="huug6ebpa"/><path class="jyflo82pl"/><path class="qo19wnb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:incognito-mode"} {...others} />);
}

export default Component;
