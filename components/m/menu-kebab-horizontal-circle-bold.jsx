import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p77rup82s.css';
import '../../css/q/qqec_9bvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="p77rup82s"/><path class="qqec_9bvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:menu-kebab-horizontal-circle-bold"} {...others} />);
}

export default Component;
