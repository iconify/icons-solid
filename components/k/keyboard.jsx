import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6skkmbbi.css';
import '../../css/b/b56lqdboo.css';
import '../../css/y/yf9np-hus.css';
import '../../css/p/po33hbcpc.css';
import '../../css/b/b9cgswb2q.css';
import '../../css/b/bn-rvvbow.css';
import '../../css/e/e9pjx5b0x.css';
import '../../css/e/eqtx_9bjq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6skkmbbi"/><path clip-rule="evenodd" class="b56lqdboo"/><path clip-rule="evenodd" class="yf9np-hus"/><path clip-rule="evenodd" class="po33hbcpc"/><path clip-rule="evenodd" class="b9cgswb2q"/><path clip-rule="evenodd" class="bn-rvvbow"/><path clip-rule="evenodd" class="e9pjx5b0x"/><path class="eqtx_9bjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:keyboard"} {...others} />);
}

export default Component;
