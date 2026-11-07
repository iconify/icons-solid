import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/e/e_wor2bbs.css';
import '../../css/l/lm7otu1mj.css';
import '../../css/b/bu-wc30dp.css';
import '../../css/g/gvinp5b1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fyr67fbfm"/><path class="e_wor2bbs"/><path class="lm7otu1mj"/><path class="bu-wc30dp"/><path class="gvinp5b1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flash-drive-broken"} {...others} />);
}

export default Component;
