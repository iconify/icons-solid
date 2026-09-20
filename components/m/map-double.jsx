import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgnv8ebcv.css';
import '../../css/r/rrkrpelya.css';
import '../../css/p/ptym6unom.css';
import '../../css/o/okygb9b9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cgnv8ebcv"/><path class="rrkrpelya"/><path class="ptym6unom"/><path class="okygb9b9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-double"} {...others} />);
}

export default Component;
