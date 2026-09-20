import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_svndbfa.css';
import '../../css/b/bexar7b7s.css';
import '../../css/m/mntxcwjfq.css';

const viewBox = {"width":224.88,"height":225};
const content = `<path class="f_svndbfa"/><path class="bexar7b7s"/><path class="mntxcwjfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ic-glass"} {...others} />);
}

export default Component;
