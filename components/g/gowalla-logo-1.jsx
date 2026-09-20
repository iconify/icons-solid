import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/roqv57bef.css';
import '../../css/n/nahzejbds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="roqv57bef"/><path class="nahzejbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gowalla-logo-1"} {...others} />);
}

export default Component;
