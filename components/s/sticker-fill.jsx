import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jajm5-bsz.css';
import '../../css/k/k_heijbqq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jajm5-bsz"/><path class="k_heijbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sticker-fill"} {...others} />);
}

export default Component;
