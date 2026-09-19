import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zqk0kknjx.css';
import '../../css/b/b4lfounoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zqk0kknjx"/><path class="b4lfounoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-big-right-dash"} {...others} />);
}

export default Component;
