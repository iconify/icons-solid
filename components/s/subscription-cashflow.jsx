import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/n/nutcoacsr.css';
import '../../css/m/m_3aspbzd.css';
import '../../css/p/psq-e9bgh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="nutcoacsr"/><path class="m_3aspbzd"/><path class="psq-e9bgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:subscription-cashflow"} {...others} />);
}

export default Component;
