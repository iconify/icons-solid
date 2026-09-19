import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n9pjfq-yt.css';
import '../../css/t/ti5n43m2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n9pjfq-yt"/><path class="ti5n43m2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:play-list-remove"} {...others} />);
}

export default Component;
