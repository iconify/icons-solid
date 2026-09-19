import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/uuky_gise.css';
import '../../css/d/dosxjk78e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="uuky_gise"/><path class="dosxjk78e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:menu-kebab-vertical-circle-light"} {...others} />);
}

export default Component;
