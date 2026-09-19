import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3sadsbjv.css';
import '../../css/h/hy-spriyj.css';
import '../../css/a/aa5zgnp3b.css';
import '../../css/h/hcphdfbte.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3sadsbjv"/><path class="hy-spriyj"/><path class="aa5zgnp3b"/><circle class="hcphdfbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:wifi-on"} {...others} />);
}

export default Component;
