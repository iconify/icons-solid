import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qtgbu-bfe.css';
import '../../css/d/dzg43m6ss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qtgbu-bfe"/><path class="dzg43m6ss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clipboard-copy"} {...others} />);
}

export default Component;
