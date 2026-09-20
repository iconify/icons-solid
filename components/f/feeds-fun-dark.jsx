import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4esp7b2q.css';
import '../../css/i/im-69xmjv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u4esp7b2q"/><path class="im-69xmjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:feeds-fun-dark"} {...others} />);
}

export default Component;
