import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/svsxe4bcz.css';
import '../../css/r/rdlh48bhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="svsxe4bcz"/><path class="rdlh48bhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:air-vent"} {...others} />);
}

export default Component;
