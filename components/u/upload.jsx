import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipf2zhprn.css';
import '../../css/c/cvimsccvy.css';
import '../../css/i/i5lmhc31t.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="ipf2zhprn"/><path class="cvimsccvy"/><path class="i5lmhc31t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:upload"} {...others} />);
}

export default Component;
