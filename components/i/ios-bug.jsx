import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjkt4fvdh.css';
import '../../css/j/jswt5rbrt.css';
import '../../css/u/um2_m_i-t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bjkt4fvdh"/><path class="jswt5rbrt"/><path class="um2_m_i-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-bug"} {...others} />);
}

export default Component;
