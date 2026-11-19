import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl7nbhbyz.css';
import '../../css/t/tm3qd_b6u.css';
import '../../css/y/y62tig_di.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bl7nbhbyz"/><path class="tm3qd_b6u"/><path class="y62tig_di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:experiment-plus"} {...others} />);
}

export default Component;
