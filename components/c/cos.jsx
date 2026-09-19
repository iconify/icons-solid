import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fuxusi6tu.css';
import '../../css/q/qy2_82b8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fuxusi6tu"/><path class="qy2_82b8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cos"} {...others} />);
}

export default Component;
