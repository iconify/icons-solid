import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb3m88byk.css';
import '../../css/b/ba1fozbwm.css';
import '../../css/v/v3or5zb3r.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kb3m88byk"/><path class="ba1fozbwm"/><path class="v3or5zb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:hugo"} {...others} />);
}

export default Component;
