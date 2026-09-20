import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9sl7lbit.css';
import '../../css/x/x7rph2bhw.css';
import '../../css/t/tx-4f1bjp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z9sl7lbit"/><path class="x7rph2bhw"/><path class="tx-4f1bjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opentogethertube"} {...others} />);
}

export default Component;
