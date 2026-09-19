import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/txqhekeeo.css';
import '../../css/g/gjn1uj6bu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="txqhekeeo"/><path class="gjn1uj6bu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-download-01"} {...others} />);
}

export default Component;
