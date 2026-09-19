import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtylgdcmj.css';
import '../../css/w/wod7bgbrc.css';
import '../../css/t/tnokj8bkj.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="jtylgdcmj"><path class="wod7bgbrc"/><path class="tnokj8bkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-time"} {...others} />);
}

export default Component;
