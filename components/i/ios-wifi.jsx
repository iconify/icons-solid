import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwwxm2b6y.css';
import '../../css/j/j8adrjbzg.css';
import '../../css/k/ken9h11xt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cwwxm2b6y"/><path class="j8adrjbzg"/><path class="ken9h11xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-wifi"} {...others} />);
}

export default Component;
