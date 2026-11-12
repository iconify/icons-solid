import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-h4qwbaf.css';
import '../../css/w/wyxbf2b8i.css';
import '../../css/h/hcq-4ebvn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t-h4qwbaf"/><path class="wyxbf2b8i"/><path class="hcq-4ebvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:glances"} {...others} />);
}

export default Component;
