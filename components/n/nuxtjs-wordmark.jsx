import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h463hc-oe.css';
import '../../css/q/qakety7sc.css';
import '../../css/x/xr5cjkbco.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="h463hc-oe"/><path class="qakety7sc"/><path class="xr5cjkbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:nuxtjs-wordmark"} {...others} />);
}

export default Component;
