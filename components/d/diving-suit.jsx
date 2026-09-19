import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/f/fe_6t6d0u.css';
import '../../css/y/y4mbm7bnq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="fe_6t6d0u"/><path class="y4mbm7bnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:diving-suit"} {...others} />);
}

export default Component;
