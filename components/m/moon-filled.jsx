import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyd_hm.css';
import '../../css/y/ydovum.css';
import '../../css/z/zokflo.css';
import '../../css/x/xgpo5m.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xyd_hm ydovum"/><path class="ydovum zokflo"/><path class="xgpo5m ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:moon-filled"} {...others} />);
}

export default Component;
