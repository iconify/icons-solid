import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pow4bf5-z.css';
import '../../css/m/m9rz3zbbf.css';
import '../../css/p/p3ymykbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="pow4bf5-z"/><circle transform="rotate(180 17.5 14.5)" class="m9rz3zbbf"/><path class="p3ymykbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:zodiac-cancer"} {...others} />);
}

export default Component;
