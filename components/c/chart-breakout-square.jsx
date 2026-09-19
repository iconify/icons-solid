import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ymrsgxbyw.css';
import '../../css/b/bia602b3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ymrsgxbyw"/><path class="bia602b3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-breakout-square"} {...others} />);
}

export default Component;
