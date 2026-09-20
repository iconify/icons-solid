import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhktnebyi.css';
import '../../css/x/x3okx1b0y.css';
import '../../css/w/wkj5pkqok.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yhktnebyi"/><path class="x3okx1b0y"/><path class="wkj5pkqok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:signature-pdf"} {...others} />);
}

export default Component;
