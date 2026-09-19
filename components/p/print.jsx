import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv3-k1ocu.css';
import '../../css/h/hxk53pb6b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xv3-k1ocu"/><path class="hxk53pb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:print"} {...others} />);
}

export default Component;
