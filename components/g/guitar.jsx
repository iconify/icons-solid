import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nw4n_tb5y.css';
import '../../css/j/jqmfhccyc.css';
import '../../css/n/no9almpsf.css';
import '../../css/h/hp3nybfqx.css';
import '../../css/u/udnigi2cc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nw4n_tb5y"/><path class="jqmfhccyc"/><path class="no9almpsf"/><path class="hp3nybfqx"/><path class="udnigi2cc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:guitar"} {...others} />);
}

export default Component;
