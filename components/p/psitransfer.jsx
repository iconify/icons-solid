import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpt1a073y.css';
import '../../css/z/zbfwn0b3z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kpt1a073y"/><path class="zbfwn0b3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:psitransfer"} {...others} />);
}

export default Component;
