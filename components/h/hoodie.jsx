import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dvkq3fkcy.css';
import '../../css/g/gzpm6zbzn.css';
import '../../css/j/jqnus1b-u.css';
import '../../css/b/brwm01bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dvkq3fkcy"/><path class="gzpm6zbzn"/><path class="jqnus1b-u"/><path class="brwm01bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hoodie"} {...others} />);
}

export default Component;
