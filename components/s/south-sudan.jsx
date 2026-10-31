import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sw71rzbmh.css';
import '../../css/o/olyrocboy.css';
import '../../css/p/pg6-6logl.css';
import '../../css/z/z472j7n0q.css';
import '../../css/d/d87ytcxcs.css';
import '../../css/z/zg8u14v_b.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="sw71rzbmh"/><path class="olyrocboy"/><path class="pg6-6logl"/><path class="z472j7n0q"/><path class="d87ytcxcs"/><path class="zg8u14v_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:south-sudan"} {...others} />);
}

export default Component;
