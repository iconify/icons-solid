import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oftlmobpw.css';
import '../../css/a/aj9y6acmb.css';
import '../../css/b/br3smkx-y.css';
import '../../css/t/trga3dbka.css';
import '../../css/d/dvo9i08hu.css';
import '../../css/o/omcedhw0q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="oftlmobpw"/><path class="aj9y6acmb"/><path class="br3smkx-y"/><path class="trga3dbka"/><path class="dvo9i08hu"/><path class="omcedhw0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:webgpu-wordmark"} {...others} />);
}

export default Component;
