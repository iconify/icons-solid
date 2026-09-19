import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hvb16ibtn.css';
import '../../css/j/j9lx0zklz.css';
import '../../css/e/erhl3ib4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hvb16ibtn"/><path class="j9lx0zklz"/><path class="erhl3ib4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cowboy-hat"} {...others} />);
}

export default Component;
