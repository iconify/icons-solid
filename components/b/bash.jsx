import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j4n2e9b5s.css';
import '../../css/b/b77aab4sk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j4n2e9b5s"/><path class="b77aab4sk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bash"} {...others} />);
}

export default Component;
