import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/le2lglbub.css';
import '../../css/m/m_w6stipp.css';
import '../../css/i/iqkz9v-ci.css';
import '../../css/m/m70ohgbed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="le2lglbub"/><path class="m_w6stipp"/><path class="iqkz9v-ci"/><path class="m70ohgbed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:quote-up"} {...others} />);
}

export default Component;
