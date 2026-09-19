import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/s_24sns7n.css';
import '../../css/y/ys1gjwbls.css';
import '../../css/y/yt9q-fb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="s_24sns7n"/><path class="ys1gjwbls"/><path class="yt9q-fb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-circle-bold"} {...others} />);
}

export default Component;
