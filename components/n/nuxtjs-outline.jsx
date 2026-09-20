import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/u-wsh989r.css';
import '../../css/o/ozd7kohpu.css';

const viewBox = {"width":15,"height":15};
const content = `<g class="to-5kdesz"><path class="u-wsh989r"/><path class="ozd7kohpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:nuxtjs-outline"} {...others} />);
}

export default Component;
