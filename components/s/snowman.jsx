import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6gnjjbrl.css';
import '../../css/a/axp2ftd3q.css';
import '../../css/g/gevjarbuq.css';
import '../../css/g/ggus2wbkz.css';
import '../../css/y/yp8vhbuff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c6gnjjbrl"/><path class="axp2ftd3q"/><path class="gevjarbuq"/><path class="ggus2wbkz"/><path class="yp8vhbuff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:snowman"} {...others} />);
}

export default Component;
