import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dawrykb_t.css';
import '../../css/s/srztgmmzo.css';
import '../../css/u/ugkergbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dawrykb_t"/><path class="srztgmmzo"/><path class="ugkergbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:media-protection-shield"} {...others} />);
}

export default Component;
