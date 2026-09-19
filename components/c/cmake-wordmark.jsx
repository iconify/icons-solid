import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-kkqni0e.css';
import '../../css/b/bj9vs0gqe.css';
import '../../css/n/nfoh-ac5v.css';
import '../../css/e/ecbvgib7m.css';
import '../../css/w/wobnetymm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l-kkqni0e"/><path class="bj9vs0gqe"/><path class="nfoh-ac5v"/><path class="ecbvgib7m"/><path class="wobnetymm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cmake-wordmark"} {...others} />);
}

export default Component;
