import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uoqec7bty.css';
import '../../css/a/an01lk05r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uoqec7bty"/><path class="an01lk05r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:equipment-weightlifting"} {...others} />);
}

export default Component;
