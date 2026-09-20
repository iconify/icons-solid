import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnax4vb1j.css';
import '../../css/v/vo9nbhbmr.css';
import '../../css/n/n8sy5do8i.css';
import '../../css/x/xvr-not9z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hnax4vb1j"/><path class="vo9nbhbmr"/><path class="n8sy5do8i"/><path class="xvr-not9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sunshine"} {...others} />);
}

export default Component;
