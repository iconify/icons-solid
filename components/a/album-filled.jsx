import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpfqosbkf.css';
import '../../css/s/sjk0srbgx.css';
import '../../css/r/r76zk_bwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xpfqosbkf"/><path clip-rule="evenodd" class="sjk0srbgx"/><path class="r76zk_bwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:album-filled"} {...others} />);
}

export default Component;
