import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq_lh9b1r.css';
import '../../css/z/z2r6h84kl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kq_lh9b1r"/><path class="z2r6h84kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:files-empty"} {...others} />);
}

export default Component;
