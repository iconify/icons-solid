import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xrc1sy4cr.css';
import '../../css/t/tovzwibka.css';
import '../../css/s/s00vn4bxb.css';
import '../../css/i/iqmb9c9lx.css';
import '../../css/q/q7cyvqvdg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="xrc1sy4cr"/><path class="tovzwibka"/><path class="s00vn4bxb"/><path class="iqmb9c9lx"/><path class="q7cyvqvdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-switch-account"} {...others} />);
}

export default Component;
