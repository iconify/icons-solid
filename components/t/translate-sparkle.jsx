import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jx_lh1r_n.css';
import '../../css/n/nyf1cnnih.css';
import '../../css/u/uwapbnbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jx_lh1r_n"/><path class="nyf1cnnih"/><path class="uwapbnbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:translate-sparkle"} {...others} />);
}

export default Component;
