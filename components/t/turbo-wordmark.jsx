import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxrr9-byy.css';
import '../../css/r/rtw15hrhy.css';
import '../../css/f/fhjblj9sh.css';
import '../../css/q/q6cfgtwrt.css';
import '../../css/p/p6qbovb2v.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jxrr9-byy"/><path class="rtw15hrhy"/><path class="fhjblj9sh"/><path clip-rule="evenodd" class="q6cfgtwrt"/><path class="p6qbovb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:turbo-wordmark"} {...others} />);
}

export default Component;
