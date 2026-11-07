import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s47kc73dd.css';
import '../../css/h/h89wykbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s47kc73dd"/><path class="h89wykbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevron-last-outline"} {...others} />);
}

export default Component;
