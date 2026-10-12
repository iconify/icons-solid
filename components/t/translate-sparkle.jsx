import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-277vbkj.css';
import '../../css/f/fhfrmo9bk.css';
import '../../css/p/pdwt55plv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w-277vbkj"/><path class="fhfrmo9bk"/><path class="pdwt55plv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:translate-sparkle"} {...others} />);
}

export default Component;
