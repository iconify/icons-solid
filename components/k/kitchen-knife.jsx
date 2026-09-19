import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0-cvjbua.css';
import '../../css/w/w-3x32u8q.css';
import '../../css/p/pr_1mzb5o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="t0-cvjbua"/><path class="w-3x32u8q"/><circle class="pr_1mzb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:kitchen-knife"} {...others} />);
}

export default Component;
