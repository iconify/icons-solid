import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2ep5t2cq.css';
import '../../css/b/btg1i0bdb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s2ep5t2cq"/><path class="btg1i0bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-dreamweaver"} {...others} />);
}

export default Component;
