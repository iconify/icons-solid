import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynacwacmn.css';
import '../../css/k/kmd5rqb-k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ynacwacmn"/><path class="kmd5rqb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mail-open-outline"} {...others} />);
}

export default Component;
