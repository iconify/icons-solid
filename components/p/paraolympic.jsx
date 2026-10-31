import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e68szxm0m.css';
import '../../css/y/yd68bzboy.css';
import '../../css/u/uh75vufjh.css';
import '../../css/t/tl77kv_9a.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="e68szxm0m"/><path class="yd68bzboy"/><path class="uh75vufjh"/><path class="tl77kv_9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:paraolympic"} {...others} />);
}

export default Component;
