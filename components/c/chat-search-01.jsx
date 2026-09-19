import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/viajdbm9a.css';
import '../../css/o/o0y4tfbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="viajdbm9a"/><path class="o0y4tfbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-search-01"} {...others} />);
}

export default Component;
