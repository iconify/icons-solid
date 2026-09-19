import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/udflrpb0o.css';
import '../../css/w/w121wcbkc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="udflrpb0o"/><path class="w121wcbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:text-underline"} {...others} />);
}

export default Component;
