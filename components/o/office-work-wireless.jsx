import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t0etnac5x.css';
import '../../css/z/zfaq3zbpk.css';
import '../../css/t/thxr7ccjs.css';
import '../../css/y/yb0b6rztf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="t0etnac5x"/><path class="zfaq3zbpk"/><path class="thxr7ccjs"/><path class="yb0b6rztf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-work-wireless"} {...others} />);
}

export default Component;
