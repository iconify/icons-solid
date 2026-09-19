import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tmduq-5gc.css';
import '../../css/z/zd1u9vbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tmduq-5gc"/><path class="zd1u9vbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-hold-02"} {...others} />);
}

export default Component;
