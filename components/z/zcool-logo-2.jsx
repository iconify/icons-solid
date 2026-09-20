import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/prwsw9-4e.css';
import '../../css/z/zrg4asb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="prwsw9-4e"/><path class="zrg4asb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:zcool-logo-2"} {...others} />);
}

export default Component;
