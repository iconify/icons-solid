import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/g/gwf4hub6l.css';
import '../../css/v/v1d7epbbz.css';
import '../../css/v/v0eyhohjf.css';
import '../../css/u/uk1hw4hsp.css';
import '../../css/o/o-l5ahv7j.css';
import '../../css/w/w_msf9buc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="gwf4hub6l"/><path class="v1d7epbbz"/><path class="v0eyhohjf"/><path class="uk1hw4hsp"/><path class="o-l5ahv7j"/><path class="w_msf9buc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:compression"} {...others} />);
}

export default Component;
