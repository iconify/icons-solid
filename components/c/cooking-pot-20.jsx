import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f68_4fg2y.css';
import '../../css/m/mnnp_abay.css';
import '../../css/x/xscus6cad.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f68_4fg2y"/><path class="mnnp_abay"/><path class="xscus6cad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cooking-pot-20"} {...others} />);
}

export default Component;
