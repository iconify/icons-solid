import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jidooobyy.css';
import '../../css/v/vrp19nbdv.css';
import '../../css/x/x7y2qgblu.css';
import '../../css/f/fctv43p_k.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="jidooobyy"/><path class="vrp19nbdv"/><path clip-rule="evenodd" class="x7y2qgblu"/><path class="fctv43p_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:users-16"} {...others} />);
}

export default Component;
