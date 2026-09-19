import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/b/br4irwbvw.css';
import '../../css/r/r-ngfy_wa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="br4irwbvw"/><path class="r-ngfy_wa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:comment-dots-thin"} {...others} />);
}

export default Component;
