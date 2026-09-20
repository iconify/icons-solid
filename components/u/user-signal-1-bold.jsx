import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf5sz9i8w.css';
import '../../css/l/l5sm_m-zm.css';
import '../../css/g/gdubncbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zf5sz9i8w"/><path class="l5sm_m-zm"/><path class="gdubncbdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:user-signal-1-bold"} {...others} />);
}

export default Component;
