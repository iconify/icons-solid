import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l0bwasb9b.css';
import '../../css/a/a48zonvkd.css';
import '../../css/l/l-cwkic2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="l0bwasb9b"/><path class="a48zonvkd"/><path class="l-cwkic2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:grid2x2-x"} {...others} />);
}

export default Component;
