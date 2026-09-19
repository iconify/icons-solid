import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4cmerb_j.css';
import '../../css/d/d8hhl9rhn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c4cmerb_j"/><path class="d8hhl9rhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mail-unread-sharp"} {...others} />);
}

export default Component;
