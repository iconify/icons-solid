import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yodzen-to.css';
import '../../css/p/p1e355btg.css';
import '../../css/p/p74w0sexm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="yodzen-to"/><circle class="p1e355btg"/><path clip-rule="evenodd" class="p74w0sexm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:routing3-filled"} {...others} />);
}

export default Component;
