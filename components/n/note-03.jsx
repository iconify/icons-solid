import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vme37io-m.css';
import '../../css/v/vlusuky3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vme37io-m"/><path class="vlusuky3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:note-03"} {...others} />);
}

export default Component;
