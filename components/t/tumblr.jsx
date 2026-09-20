import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcgz-8zfs.css';
import '../../css/e/e7nh98xpn.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="tcgz-8zfs"/><path class="e7nh98xpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tumblr"} {...others} />);
}

export default Component;
