import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa-vdingl.css';
import '../../css/j/jm-ifbcih.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qa-vdingl"/><path class="jm-ifbcih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crt-sh"} {...others} />);
}

export default Component;
