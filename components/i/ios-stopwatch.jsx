import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnboovlfn.css';
import '../../css/c/c-h-kzbwd.css';
import '../../css/g/giut3nb_b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mnboovlfn"/><path class="c-h-kzbwd"/><path class="giut3nb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-stopwatch"} {...others} />);
}

export default Component;
