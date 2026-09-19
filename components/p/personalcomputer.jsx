import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx3gkxbke.css';
import '../../css/g/glp0gj3np.css';
import '../../css/h/h1_nyg4fd.css';
import '../../css/c/cup21hfki.css';
import '../../css/k/kg2his8pd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cx3gkxbke"/><path class="glp0gj3np"/><path class="h1_nyg4fd"/><circle class="cup21hfki"/><path class="kg2his8pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:personalcomputer"} {...others} />);
}

export default Component;
