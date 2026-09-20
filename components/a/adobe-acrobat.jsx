import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm84comle.css';
import '../../css/l/l2q_0xbvf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pm84comle"/><path class="l2q_0xbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-acrobat"} {...others} />);
}

export default Component;
