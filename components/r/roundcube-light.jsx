import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc26ied2w.css';
import '../../css/z/zrv1yxb_h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jc26ied2w"/><path class="zrv1yxb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:roundcube-light"} {...others} />);
}

export default Component;
