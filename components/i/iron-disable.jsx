import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/r/rx43e1bfa.css';
import '../../css/v/vlgv0-bvw.css';
import '../../css/h/hq5fx08et.css';
import '../../css/c/cqhxeabme.css';
import '../../css/h/hyphcb90v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="rx43e1bfa"/><path class="vlgv0-bvw"/><circle class="hq5fx08et"/><path class="cqhxeabme"/><path class="hyphcb90v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:iron-disable"} {...others} />);
}

export default Component;
