import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b48nsibwb.css';
import '../../css/j/jqgwa20rl.css';
import '../../css/s/s8h64qb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b48nsibwb"/><path class="jqgwa20rl"/><path class="s8h64qb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:setting-error-04"} {...others} />);
}

export default Component;
