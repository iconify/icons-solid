import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b8g23dwwd.css';
import '../../css/u/ukpu1iblv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="b8g23dwwd"/><path class="ukpu1iblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shrub"} {...others} />);
}

export default Component;
