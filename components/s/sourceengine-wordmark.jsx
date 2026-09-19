import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gax-3p3_e.css';
import '../../css/c/cz41hf7gw.css';
import '../../css/d/ds0r57bdo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gax-3p3_e"/><path class="cz41hf7gw"/><path class="ds0r57bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sourceengine-wordmark"} {...others} />);
}

export default Component;
