import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i3ncrccpa.css';
import '../../css/w/w2o1tebia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i3ncrccpa"/><path class="w2o1tebia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:adjust-position"} {...others} />);
}

export default Component;
