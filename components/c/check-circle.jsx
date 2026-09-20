import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wr73dcb6v.css';
import '../../css/s/seygw-57p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wr73dcb6v"/><path class="seygw-57p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:check-circle"} {...others} />);
}

export default Component;
