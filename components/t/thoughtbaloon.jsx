import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr-ksnhfb.css';
import '../../css/n/nqaiq_lnn.css';
import '../../css/u/uvs2kogds.css';
import '../../css/a/ad6qe92ab.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="mr-ksnhfb"/><circle class="nqaiq_lnn"/><circle class="uvs2kogds"/><path class="ad6qe92ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:thoughtbaloon"} {...others} />);
}

export default Component;
