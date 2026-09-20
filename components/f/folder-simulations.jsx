import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_t41-uxm.css';
import '../../css/c/c6y61i2ho.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g_t41-uxm"/><path class="c6y61i2ho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-simulations"} {...others} />);
}

export default Component;
