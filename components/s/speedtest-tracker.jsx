import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0q8t5bbo.css';
import '../../css/d/dmf_nf1iq.css';
import '../../css/i/iu3giabov.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e0q8t5bbo"/><path class="dmf_nf1iq"/><path class="iu3giabov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:speedtest-tracker"} {...others} />);
}

export default Component;
