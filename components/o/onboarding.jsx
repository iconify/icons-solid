import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/w/w3z8g9bbs.css';
import '../../css/y/y-4lnqblw.css';
import '../../css/i/ii271fx5o.css';
import '../../css/z/z4km375or.css';
import '../../css/n/no94o5f7b.css';
import '../../css/d/dr2jl9rhe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><path class="w3z8g9bbs"/><path class="y-4lnqblw"/><path class="ii271fx5o"/><path class="z4km375or"/><path class="no94o5f7b"/><path class="dr2jl9rhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:onboarding"} {...others} />);
}

export default Component;
