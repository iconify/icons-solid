import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oto715bfm.css';
import '../../css/g/gnj61ac6v.css';
import '../../css/o/orctz5b3e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oto715bfm"/><path class="gnj61ac6v"/><path class="orctz5b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:smore-newsletter"} {...others} />);
}

export default Component;
