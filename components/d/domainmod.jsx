import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pggcykugm.css';
import '../../css/s/sfbxtiqsz.css';
import '../../css/o/o8hoowu9h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pggcykugm"/><path class="sfbxtiqsz"/><path class="o8hoowu9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domainmod"} {...others} />);
}

export default Component;
