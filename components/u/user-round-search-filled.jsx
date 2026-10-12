import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks_ymhfxr.css';
import '../../css/b/b_q949lvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ks_ymhfxr"/><path class="b_q949lvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-search-filled"} {...others} />);
}

export default Component;
