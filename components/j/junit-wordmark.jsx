import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl9r37boe.css';
import '../../css/f/fmyd_bcdu.css';
import '../../css/g/gody8syjs.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vl9r37boe"/><path class="fmyd_bcdu"/><path class="gody8syjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:junit-wordmark"} {...others} />);
}

export default Component;
