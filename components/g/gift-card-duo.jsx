import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tk-xkothd.css';
import '../../css/v/v3_lbcvvv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="tk-xkothd"/><path class="v3_lbcvvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-card-duo"} {...others} />);
}

export default Component;
