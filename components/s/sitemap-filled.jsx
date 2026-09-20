import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z45ndnbtg.css';
import '../../css/d/ds60-9fyq.css';
import '../../css/g/gj80k7mlj.css';
import '../../css/p/pn0c-rgco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z45ndnbtg"/><rect class="ds60-9fyq"/><rect class="gj80k7mlj"/><rect class="pn0c-rgco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sitemap-filled"} {...others} />);
}

export default Component;
