import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajg0txb_k.css';
import '../../css/o/oy6spb5ml.css';
import '../../css/x/xqmak-b8c.css';
import '../../css/y/yp6oh7b-i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ajg0txb_k"/><path class="oy6spb5ml"/><path class="xqmak-b8c"/><path class="yp6oh7b-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contactless-20"} {...others} />);
}

export default Component;
