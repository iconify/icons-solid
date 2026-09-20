import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa8xxfbmy.css';
import '../../css/s/sms_5zbgi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wa8xxfbmy"/><path class="sms_5zbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:copy"} {...others} />);
}

export default Component;
