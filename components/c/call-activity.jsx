import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnd4yka7p.css';

const viewBox = {"width":2000,"height":2000};
const content = `<rect transform="translate(0 947.638)" class="lnd4yka7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:call-activity"} {...others} />);
}

export default Component;
