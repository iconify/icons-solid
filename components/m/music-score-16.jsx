import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk75zkjgm.css';
import '../../css/s/so77q_bes.css';
import '../../css/y/ylah79bhu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="lk75zkjgm"/><path clip-rule="evenodd" class="so77q_bes"/><path class="ylah79bhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:music-score-16"} {...others} />);
}

export default Component;
