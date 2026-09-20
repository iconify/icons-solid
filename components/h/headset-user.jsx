import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/i/is016qbow.css';
import '../../css/j/j21j-5bvh.css';
import '../../css/f/fu_lrcb_y.css';
import '../../css/j/j79rc7b_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="is016qbow"/><path class="j21j-5bvh"/><path class="fu_lrcb_y"/><path class="j79rc7b_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:headset-user"} {...others} />);
}

export default Component;
