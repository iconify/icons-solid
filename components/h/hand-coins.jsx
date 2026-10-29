import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye75vbcqm.css';
import '../../css/j/jctnliumq.css';
import '../../css/l/liw58u7sh.css';
import '../../css/o/ozpmetblj.css';
import '../../css/q/qjuarldku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a ye75vbcqm"/><path class="jctnliumq wm-k"/><path class="liw58u7sh wm-k"/><path class="ozpmetblj wm-a"/><path class="qjuarldku wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hand-coins"} {...others} />);
}

export default Component;
