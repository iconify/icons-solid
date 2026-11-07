import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e9bgwyb-s.css';
import '../../css/e/e7rtyhbdt.css';
import '../../css/o/o6zz0vbkl.css';
import '../../css/m/mzn_blbqr.css';
import '../../css/d/dadlzrowr.css';
import '../../css/r/raokm3b8s.css';
import '../../css/x/xvjk-cbox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e9bgwyb-s"/><path class="e7rtyhbdt"/><path class="o6zz0vbkl"/><path class="mzn_blbqr"/><path class="dadlzrowr"/><path class="raokm3b8s"/><path class="xvjk-cbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gift-line-duotone"} {...others} />);
}

export default Component;
