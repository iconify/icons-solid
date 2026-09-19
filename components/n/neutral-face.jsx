import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sgv587bws.css';
import '../../css/f/f9_9r-bbf.css';
import '../../css/h/hkyxqm1oe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="sgv587bws"/><path class="f9_9r-bbf"/><path class="hkyxqm1oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:neutral-face"} {...others} />);
}

export default Component;
