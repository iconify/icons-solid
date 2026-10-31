import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2w6t3b0i.css';
import '../../css/f/fgh2fcbnj.css';
import '../../css/l/lzc4vcbfk.css';
import '../../css/p/p6h5u-bah.css';
import '../../css/p/pptz10bie.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="l2w6t3b0i"/><path class="fgh2fcbnj"/><path class="lzc4vcbfk"/><path class="p6h5u-bah"/><path class="pptz10bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:azerbaijan"} {...others} />);
}

export default Component;
