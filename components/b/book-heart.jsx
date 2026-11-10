import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbvw9zb7o.css';
import '../../css/o/o_uzc9wzr.css';
import '../../css/z/zayp6_xeg.css';
import '../../css/a/auq-e_b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cbvw9zb7o"/><path clip-rule="evenodd" class="o_uzc9wzr"/><path class="zayp6_xeg"/><path class="auq-e_b7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-heart"} {...others} />);
}

export default Component;
