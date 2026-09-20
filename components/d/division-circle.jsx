import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d-k3xxrtd.css';
import '../../css/e/ekradbbmu.css';
import '../../css/d/dzt4cgbwm.css';
import '../../css/w/wgajukbpj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d-k3xxrtd"/><path class="ekradbbmu"/><path class="dzt4cgbwm"/><path class="wgajukbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:division-circle"} {...others} />);
}

export default Component;
