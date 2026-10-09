import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s60tohl9o.css';
import '../../css/p/pzzjixb2k.css';
import '../../css/b/b_n-robbb.css';
import '../../css/w/wh3r_vb2q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s60tohl9o"/><path class="pzzjixb2k"/><path class="b_n-robbb"/><path class="wh3r_vb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scales-20"} {...others} />);
}

export default Component;
