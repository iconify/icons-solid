import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zrg4asb8b.css';
import '../../css/v/v6azvo1mp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zrg4asb8b"/><path class="v6azvo1mp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:zcool-logo-1"} {...others} />);
}

export default Component;
