import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zn5_m8bis.css';
import '../../css/q/qxt88f8bq.css';
import '../../css/w/wmf3hlblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zn5_m8bis"/><path class="qxt88f8bq"/><path class="wmf3hlblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen2-duotone"} {...others} />);
}

export default Component;
