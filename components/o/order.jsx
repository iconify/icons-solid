import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/j/jd5cu_bod.css';
import '../../css/i/iq_367b1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="jd5cu_bod"/><path class="iq_367b1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:order"} {...others} />);
}

export default Component;
