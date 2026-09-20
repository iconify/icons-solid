import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ejpzf19yv.css';
import '../../css/x/xacbrac1w.css';
import '../../css/s/sjhecfbsi.css';
import '../../css/s/segs2kb4s.css';
import '../../css/x/xh9ldghuc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ejpzf19yv"/><path class="xacbrac1w"/><path class="sjhecfbsi"/><path class="segs2kb4s"/><path class="xh9ldghuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:mouse-wireless-1"} {...others} />);
}

export default Component;
