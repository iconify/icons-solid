import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e77174b8r.css';
import '../../css/l/lyt4ixbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="e77174b8r"/><path class="lyt4ixbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:badge-thin"} {...others} />);
}

export default Component;
