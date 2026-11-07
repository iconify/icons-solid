import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx1kr0e0u.css';
import '../../css/o/om7lkbccu.css';
import '../../css/k/kw8vl3bjo.css';
import '../../css/s/smbj7_bwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lx1kr0e0u"/><path class="om7lkbccu"/><path class="kw8vl3bjo"/><path class="smbj7_bwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-rounded-bold"} {...others} />);
}

export default Component;
