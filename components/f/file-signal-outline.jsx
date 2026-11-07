import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp4tifbel.css';
import '../../css/b/bdbim4bgo.css';
import '../../css/t/tl0l83b8e.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kp4tifbel"/><path class="bdbim4bgo"/><path clip-rule="evenodd" class="tl0l83b8e"/><path clip-rule="evenodd" class="d25mwn3tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-signal-outline"} {...others} />);
}

export default Component;
