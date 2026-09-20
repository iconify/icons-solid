import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/b/b4k3l0bhc.css';
import '../../css/b/b9t18gc1c.css';
import '../../css/x/xpeir8huy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="b4k3l0bhc"/><path class="b9t18gc1c"/><path class="xpeir8huy"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-uruguay"} {...others} />);
}

export default Component;
