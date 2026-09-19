import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbfefqb9k.css';
import '../../css/d/dlw58kh3z.css';
import '../../css/o/ov49ujhiw.css';
import '../../css/x/xwqkw5i2m.css';
import '../../css/l/lvx4k8bzm.css';
import '../../css/w/w2ypl0b7q.css';
import '../../css/i/i-n485z0x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tbfefqb9k"/><path class="dlw58kh3z"/><path class="ov49ujhiw"/><path class="xwqkw5i2m"/><circle class="lvx4k8bzm"/><path class="w2ypl0b7q"/><path class="i-n485z0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:faxmachine"} {...others} />);
}

export default Component;
