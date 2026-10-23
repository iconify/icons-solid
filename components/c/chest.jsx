import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7xm4xssb.css';
import '../../css/z/z-dku5bwc.css';
import '../../css/q/q0coyobat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c7xm4xssb"/><path class="z-dku5bwc"/><path class="q0coyobat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chest"} {...others} />);
}

export default Component;
