import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckulpe9ec.css';
import '../../css/h/h_2ddrein.css';
import '../../css/f/fa_16t6kl.css';
import '../../css/b/bs-dfccax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ckulpe9ec"/><path class="h_2ddrein"/><circle class="fa_16t6kl"/><path class="bs-dfccax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:linkedin"} {...others} />);
}

export default Component;
