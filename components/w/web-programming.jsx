import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xp4vt6b0m.css';
import '../../css/x/x5hm26qtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xp4vt6b0m"/><path class="x5hm26qtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:web-programming"} {...others} />);
}

export default Component;
