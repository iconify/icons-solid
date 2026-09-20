import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pixd3le1c.css';
import '../../css/n/nspe8_bkd.css';
import '../../css/r/r-0tybctz.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="pixd3le1c"/><path class="nspe8_bkd"/><path class="r-0tybctz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:self-hosted-show"} {...others} />);
}

export default Component;
