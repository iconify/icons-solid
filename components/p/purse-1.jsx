import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zck7gdbhq.css';
import '../../css/q/qs1on3xma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="zck7gdbhq"/><path class="qs1on3xma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:purse-1"} {...others} />);
}

export default Component;
