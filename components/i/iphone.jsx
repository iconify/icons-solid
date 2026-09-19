import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktvza_ycb.css';
import '../../css/a/ajbc88bet.css';
import '../../css/u/u9db6-ydy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ktvza_ycb"/><path class="ajbc88bet"/><circle class="u9db6-ydy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:iphone"} {...others} />);
}

export default Component;
