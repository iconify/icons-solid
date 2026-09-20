import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/h/hepu19t1l.css';
import '../../css/e/e6x_lacct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="hepu19t1l"/><path class="e6x_lacct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-premiere-pro-logo"} {...others} />);
}

export default Component;
