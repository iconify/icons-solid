import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/ja08tibwd.css';
import '../../css/x/x35r01b7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ja08tibwd"/><path class="x35r01b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:computer-arrow-up"} {...others} />);
}

export default Component;
