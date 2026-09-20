import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pkev-m10y.css';
import '../../css/h/hkyogqi7y.css';
import '../../css/c/cjexdzt_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pkev-m10y"/><path clip-rule="evenodd" class="hkyogqi7y"/><path class="cjexdzt_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:rectangle-portrait-to-landscape-expressive"} {...others} />);
}

export default Component;
