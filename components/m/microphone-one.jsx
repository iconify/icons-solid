import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/s5s_qk0sn.css';
import '../../css/c/cplpj-rbo.css';
import '../../css/i/icfu2xbdv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="s5s_qk0sn"/><circle class="cplpj-rbo"/><path class="icfu2xbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:microphone-one"} {...others} />);
}

export default Component;
