import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/us8hqcc-d.css';
import '../../css/f/fhjah2b8s.css';
import '../../css/b/b8opj0i7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="us8hqcc-d"/><path class="fhjah2b8s"/><path class="b8opj0i7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:briefcase-thin"} {...others} />);
}

export default Component;
