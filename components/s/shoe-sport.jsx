import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvzatvbwp.css';
import '../../css/l/lccrxnbgw.css';
import '../../css/t/tjrrh16qn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rvzatvbwp"/><path class="lccrxnbgw"/><path class="tjrrh16qn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shoe-sport"} {...others} />);
}

export default Component;
