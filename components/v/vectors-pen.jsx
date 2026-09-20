import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2l11xmud.css';
import '../../css/i/im6i-_owo.css';
import '../../css/i/iiz4p1d7z.css';
import '../../css/p/p-3uudrge.css';
import '../../css/b/bgrpef5pq.css';
import '../../css/v/v55s-zbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a2l11xmud"/><path class="im6i-_owo"/><path class="iiz4p1d7z"/><path class="p-3uudrge"/><path class="bgrpef5pq"/><path class="v55s-zbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:vectors-pen"} {...others} />);
}

export default Component;
