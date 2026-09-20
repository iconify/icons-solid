import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/t/tvgm5h.css';
import '../../css/k/k50i_c.css';
import '../../css/y/ydovum.css';
import '../../css/g/g_9_ct.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/d/d-fbzv8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew tvgm5h"/><path class="iw1iew k50i_c ydovum"/><path class="g_9_ct ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:file-download"} {...others} />);
}

export default Component;
