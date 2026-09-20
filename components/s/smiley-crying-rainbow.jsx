import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe-yorbct.css';
import '../../css/m/mvx-_1qfj.css';
import '../../css/r/rukxynu_f.css';
import '../../css/r/rfrmddcja.css';
import '../../css/t/ted6-nbfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qe-yorbct"/><path class="mvx-_1qfj"/><path class="rukxynu_f"/><path class="rfrmddcja"/><path class="ted6-nbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-crying-rainbow"} {...others} />);
}

export default Component;
