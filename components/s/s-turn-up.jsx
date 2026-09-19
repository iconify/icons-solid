import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/h/het9v552a.css';
import '../../css/g/gocnr_4vl.css';
import '../../css/a/ais3w1fco.css';
import '../../css/s/szza5-kcr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="het9v552a"/><path class="gocnr_4vl"/><path class="ais3w1fco"/><circle transform="rotate(-180 10 11)" class="szza5-kcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:s-turn-up"} {...others} />);
}

export default Component;
