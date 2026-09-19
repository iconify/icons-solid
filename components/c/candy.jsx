import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxj7r4rhc.css';
import '../../css/x/x9cx8dvbi.css';
import '../../css/u/usalp6zbm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bxj7r4rhc"/><path class="x9cx8dvbi"/><path class="usalp6zbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:candy"} {...others} />);
}

export default Component;
