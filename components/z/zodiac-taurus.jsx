import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t-earhali.css';
import '../../css/h/h2g45245u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="t-earhali"/><path class="h2g45245u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:zodiac-taurus"} {...others} />);
}

export default Component;
