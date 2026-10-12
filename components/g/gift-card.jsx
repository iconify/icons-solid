import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btlr1rvkj.css';
import '../../css/l/lenb8fbpx.css';
import '../../css/j/jsvzzc_wd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="btlr1rvkj"/><rect transform="matrix(0 -1 -1 0 22.36 19.42)" class="lenb8fbpx"/><path class="jsvzzc_wd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gift-card"} {...others} />);
}

export default Component;
