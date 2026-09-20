import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5mzdhlgm.css';
import '../../css/w/wjafqsbeh.css';
import '../../css/s/s9be24r1k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c5mzdhlgm"/><path class="wjafqsbeh"/><path class="s9be24r1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:threadfin"} {...others} />);
}

export default Component;
