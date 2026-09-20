import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwvk58bob.css';
import '../../css/d/dnd1o1bkt.css';
import '../../css/b/bh3yo7b6q.css';
import '../../css/w/w009iebcq.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="hwvk58bob"/><path class="dnd1o1bkt"/><path clip-rule="evenodd" class="bh3yo7b6q"/><path clip-rule="evenodd" class="w009iebcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:gears-3"} {...others} />);
}

export default Component;
