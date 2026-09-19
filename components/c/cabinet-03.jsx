import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9gzx9b3u.css';
import '../../css/b/b4-ehgb1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n9gzx9b3u"/><path class="b4-ehgb1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cabinet-03"} {...others} />);
}

export default Component;
