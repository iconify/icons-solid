import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdab4_b6w.css';
import '../../css/u/usqgjzbkf.css';
import '../../css/i/iuk-_6mjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jdab4_b6w"/><path class="usqgjzbkf"/><path class="iuk-_6mjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lasso-polygon"} {...others} />);
}

export default Component;
