import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/giajsqbyq.css';
import '../../css/o/okbm3716n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="giajsqbyq"/><path class="okbm3716n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-pin"} {...others} />);
}

export default Component;
