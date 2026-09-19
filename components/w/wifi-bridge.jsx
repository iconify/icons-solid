import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/num_bkpuw.css';
import '../../css/b/bpv7jubps.css';
import '../../css/o/okk3kca1t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="num_bkpuw"/><path class="bpv7jubps"/><path class="okk3kca1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wifi-bridge"} {...others} />);
}

export default Component;
