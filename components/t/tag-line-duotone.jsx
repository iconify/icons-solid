import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/evuq8lbli.css';
import '../../css/j/j-efaqytf.css';
import '../../css/u/undwym_6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="evuq8lbli"/><circle transform="rotate(-45 8.607 8.879)" class="j-efaqytf"/><path class="undwym_6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-line-duotone"} {...others} />);
}

export default Component;
