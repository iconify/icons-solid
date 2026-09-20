import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/b/b8vh_x-7p.css';
import '../../css/t/tzfb_7bpq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="b8vh_x-7p"/><path class="tzfb_7bpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:delete-keyboard"} {...others} />);
}

export default Component;
