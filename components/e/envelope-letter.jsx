import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s70hfm3ku.css';
import '../../css/u/uchlo0spv.css';
import '../../css/r/rzlr-4bci.css';
import '../../css/c/cvx1a_b9x.css';
import '../../css/v/vp1emv83y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s70hfm3ku"/><path class="uchlo0spv"/><path class="rzlr-4bci"/><path class="cvx1a_b9x"/><path class="vp1emv83y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:envelope-letter"} {...others} />);
}

export default Component;
