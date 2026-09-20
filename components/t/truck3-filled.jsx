import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxsn-6h7y.css';
import '../../css/e/ecxurxb5b.css';
import '../../css/p/p33g7ob5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wxsn-6h7y"/><path class="ecxurxb5b"/><path class="p33g7ob5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:truck3-filled"} {...others} />);
}

export default Component;
