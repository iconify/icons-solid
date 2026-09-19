import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_ewppbtl.css';
import '../../css/u/uqlamj4tr.css';
import '../../css/v/vtfwic-qn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p_ewppbtl"/><circle class="uqlamj4tr"/><path class="vtfwic-qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:calendar-outline"} {...others} />);
}

export default Component;
