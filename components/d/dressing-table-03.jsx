import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wd64l9r9o.css';
import '../../css/g/gz95jzbvo.css';
import '../../css/o/o5ibevbma.css';
import '../../css/m/m_2j5mqeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wd64l9r9o"/><path class="gz95jzbvo"/><path class="o5ibevbma"/><path class="m_2j5mqeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dressing-table-03"} {...others} />);
}

export default Component;
