import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2wzsde8t.css';
import '../../css/v/vvok4-85l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p2wzsde8t"/><path class="vvok4-85l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-unknown"} {...others} />);
}

export default Component;
