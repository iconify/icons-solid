import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/c74powpze.css';
import '../../css/s/syt50b-8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="c74powpze"/><path class="syt50b-8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:taxi"} {...others} />);
}

export default Component;
