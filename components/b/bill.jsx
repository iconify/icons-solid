import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vdrkvvbjv.css';
import '../../css/d/d4t8dtbyc.css';
import '../../css/u/ujzfzujod.css';
import '../../css/u/usim2nb3o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="vdrkvvbjv"/><path class="d4t8dtbyc"/><path class="ujzfzujod"/><path class="usim2nb3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bill"} {...others} />);
}

export default Component;
