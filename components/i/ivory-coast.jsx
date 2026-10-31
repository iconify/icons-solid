import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3-a3w-3w.css';
import '../../css/l/lonxz_wlc.css';
import '../../css/k/kj18kdbau.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="c3-a3w-3w"/><path class="lonxz_wlc"/><path class="kj18kdbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:ivory-coast"} {...others} />);
}

export default Component;
