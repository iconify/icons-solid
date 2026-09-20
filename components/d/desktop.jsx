import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smm_-b_wm.css';
import '../../css/d/dzs_rab9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smm_-b_wm"/><path class="dzs_rab9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:desktop"} {...others} />);
}

export default Component;
