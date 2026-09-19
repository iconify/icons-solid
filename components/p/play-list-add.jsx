import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n9pjfq-yt.css';
import '../../css/f/f9a_3nbxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n9pjfq-yt"/><path class="f9a_3nbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:play-list-add"} {...others} />);
}

export default Component;
