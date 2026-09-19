import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/szgax_iha.css';
import '../../css/r/r0tjb5b6u.css';
import '../../css/u/u0zcgxn-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="szgax_iha"/><path class="r0tjb5b6u"/><path class="u0zcgxn-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-up-to-line"} {...others} />);
}

export default Component;
