import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bbdbdcb5j.css';
import '../../css/u/uztmj3dza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bbdbdcb5j"/><path class="uztmj3dza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:infinity-square"} {...others} />);
}

export default Component;
