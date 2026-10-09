import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c25xksbst.css';
import '../../css/b/b8n6dn1gc.css';
import '../../css/z/zbsbes5cq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c25xksbst"/><path class="b8n6dn1gc"/><path class="zbsbes5cq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:type-20-bold"} {...others} />);
}

export default Component;
