import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd415ib1g.css';
import '../../css/h/hl-46jmiu.css';
import '../../css/c/cpcuf9xkz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="fd415ib1g"/><path class="hl-46jmiu"/><path class="cpcuf9xkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:woocommerce"} {...others} />);
}

export default Component;
