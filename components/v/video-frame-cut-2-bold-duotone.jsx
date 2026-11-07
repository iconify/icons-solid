import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4gj3t3zh.css';
import '../../css/f/fa9y60bze.css';
import '../../css/b/b6sstzbsz.css';
import '../../css/b/br_fg0fhl.css';
import '../../css/v/vu2bmbbnr.css';
import '../../css/h/h03jqqbsg.css';
import '../../css/i/ica4g9x9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4gj3t3zh"/><path clip-rule="evenodd" class="fa9y60bze"/><path class="b6sstzbsz"/><path class="br_fg0fhl"/><path class="vu2bmbbnr"/><path class="h03jqqbsg"/><path class="ica4g9x9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-2-bold-duotone"} {...others} />);
}

export default Component;
