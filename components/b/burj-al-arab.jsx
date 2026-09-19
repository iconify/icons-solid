import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ucxrrm7vu.css';
import '../../css/i/iyvxh6bma.css';
import '../../css/e/epb3e3v_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ucxrrm7vu"/><path class="iyvxh6bma"/><path class="epb3e3v_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:burj-al-arab"} {...others} />);
}

export default Component;
