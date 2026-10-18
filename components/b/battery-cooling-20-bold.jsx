import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwlbz_p1k.css';
import '../../css/z/zyzasuqld.css';
import '../../css/s/s-gqk9d9n.css';
import '../../css/l/lsdiztbxb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vwlbz_p1k"/><path class="zyzasuqld"/><path class="s-gqk9d9n"/><path class="lsdiztbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cooling-20-bold"} {...others} />);
}

export default Component;
