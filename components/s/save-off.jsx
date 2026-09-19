import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cai0-yn1u.css';
import '../../css/y/y01026bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cai0-yn1u"/><path class="y01026bwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:save-off"} {...others} />);
}

export default Component;
