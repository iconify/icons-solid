import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwu_hjbwt.css';
import '../../css/l/lp-l2wbgw.css';
import '../../css/i/il_7q5b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jwu_hjbwt"/><path class="lp-l2wbgw"/><path class="il_7q5b5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tool"} {...others} />);
}

export default Component;
