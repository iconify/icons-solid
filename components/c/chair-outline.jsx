import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wuni6dv1j.css';
import '../../css/f/fa5gfobyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wuni6dv1j"/><path class="fa5gfobyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:chair-outline"} {...others} />);
}

export default Component;
