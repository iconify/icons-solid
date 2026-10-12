import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v64vfdczm.css';
import '../../css/y/ymtmr1bse.css';
import '../../css/p/pzr3zobqx.css';
import '../../css/f/f7ykmeb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v64vfdczm"/><path class="ymtmr1bse"/><path class="pzr3zobqx"/><path class="f7ykmeb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:marker-circle"} {...others} />);
}

export default Component;
