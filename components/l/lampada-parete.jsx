import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm_-1ibgr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hm_-1ibgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:lampada-parete"} {...others} />);
}

export default Component;
