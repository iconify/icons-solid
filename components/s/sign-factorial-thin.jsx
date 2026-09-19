import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l2ot3yb9x.css';
import '../../css/w/wqrhc5bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="l2ot3yb9x"/><path class="wqrhc5bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-factorial-thin"} {...others} />);
}

export default Component;
