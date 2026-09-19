import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wzjzudbgr.css';
import '../../css/b/bup5byyxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wzjzudbgr"/><path class="bup5byyxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clothes"} {...others} />);
}

export default Component;
