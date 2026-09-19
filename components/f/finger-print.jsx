import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf8q0slyc.css';
import '../../css/u/ukroeg7me.css';
import '../../css/e/emfunmbju.css';
import '../../css/f/f76sgsh0r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kf8q0slyc"/><path class="ukroeg7me"/><path class="emfunmbju"/><path class="f76sgsh0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:finger-print"} {...others} />);
}

export default Component;
