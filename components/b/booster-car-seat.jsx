import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/k/kqrk-ruil.css';
import '../../css/h/hp7mvcbtf.css';
import '../../css/w/wdu64-bsk.css';
import '../../css/q/qlrunrbcy.css';
import '../../css/n/nezsuivkh.css';
import '../../css/c/c-z6b9bdp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="kqrk-ruil"/><path class="hp7mvcbtf"/><path class="wdu64-bsk"/><path class="qlrunrbcy"/><path class="nezsuivkh"/><path class="c-z6b9bdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:booster-car-seat"} {...others} />);
}

export default Component;
