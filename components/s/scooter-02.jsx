import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zggaroand.css';
import '../../css/y/ys6p_-b4l.css';
import '../../css/i/ihst44bfj.css';
import '../../css/z/zeje06bkn.css';
import '../../css/e/er8t2-uhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zggaroand"/><path class="ys6p_-b4l"/><path class="ihst44bfj"/><circle class="zeje06bkn"/><path class="er8t2-uhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scooter-02"} {...others} />);
}

export default Component;
