import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f2wygqz0f.css';
import '../../css/b/bdgub3-zm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f2wygqz0f"/><path class="bdgub3-zm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sticky-note-03"} {...others} />);
}

export default Component;
