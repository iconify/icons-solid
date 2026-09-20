import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b0z4htqyr.css';
import '../../css/x/xbrdrg5rk.css';
import '../../css/h/hrb6kyb2e.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="b0z4htqyr"/><path class="xbrdrg5rk"/><path class="hrb6kyb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-server-2-flat"} {...others} />);
}

export default Component;
