import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfsw2acuj.css';
import '../../css/o/oiv_48byp.css';
import '../../css/p/pvywatupn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lfsw2acuj"/><path class="oiv_48byp"/><path class="pvywatupn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kite-20"} {...others} />);
}

export default Component;
