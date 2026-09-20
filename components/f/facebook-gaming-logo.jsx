import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l9ibtqvrx.css';
import '../../css/u/uh3l4ybje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="l9ibtqvrx"/><path class="uh3l4ybje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:facebook-gaming-logo"} {...others} />);
}

export default Component;
