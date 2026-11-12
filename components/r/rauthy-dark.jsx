import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk9zn-beg.css';
import '../../css/w/w-xcclbtz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bk9zn-beg"/><path class="w-xcclbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rauthy-dark"} {...others} />);
}

export default Component;
