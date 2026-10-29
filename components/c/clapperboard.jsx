import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzvy9qljv.css';
import '../../css/r/r44pubbco.css';
import '../../css/u/uodmxybrc.css';
import '../../css/b/bmxa9_qne.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzvy9qljv wm-k"/><path class="r44pubbco wm-k"/><path class="uodmxybrc wm-a"/><path class="bmxa9_qne wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:clapperboard"} {...others} />);
}

export default Component;
