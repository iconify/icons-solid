import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2_ig9bdg.css';
import '../../css/a/ad10q6v-c.css';
import '../../css/g/gzy0p2veo.css';
import '../../css/u/u2h60dbhp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f2_ig9bdg"/><path class="ad10q6v-c"/><path class="gzy0p2veo"/><path class="u2h60dbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-404-error"} {...others} />);
}

export default Component;
