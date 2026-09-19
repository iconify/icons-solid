import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtm-4pbpn.css';
import '../../css/d/dh1shqbdr.css';
import '../../css/u/usdnfabrq.css';
import '../../css/z/ze7q12bdp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gtm-4pbpn"/><path class="dh1shqbdr"/><path class="usdnfabrq"/><path class="ze7q12bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:scikitlearn"} {...others} />);
}

export default Component;
