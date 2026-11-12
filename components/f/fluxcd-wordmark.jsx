import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df_0m4b0p.css';
import '../../css/w/wd3q3wb6b.css';
import '../../css/v/v9uawug3k.css';
import '../../css/f/fm8efkbgg.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="df_0m4b0p"/><path class="wd3q3wb6b"/><path class="v9uawug3k"/><path class="fm8efkbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:fluxcd-wordmark"} {...others} />);
}

export default Component;
