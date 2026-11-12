import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spspyv84e.css';
import '../../css/s/skbabg_mz.css';
import '../../css/v/vb63gv-2l.css';
import '../../css/v/vkax1lnah.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="spspyv84e"/><path class="skbabg_mz"/><path class="vb63gv-2l"/><path class="vkax1lnah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onenote-light"} {...others} />);
}

export default Component;
