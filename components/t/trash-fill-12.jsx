import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srz00hnfq.css';
import '../../css/d/dl1wr10wi.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="srz00hnfq"/><path class="dl1wr10wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:trash-fill-12"} {...others} />);
}

export default Component;
