import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nz41hjbhh.css';
import '../../css/o/os6iakbao.css';
import '../../css/m/mces9ir0s.css';
import '../../css/q/qaew_5b7f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nz41hjbhh"/><path class="os6iakbao"/><path class="mces9ir0s"/><path class="qaew_5b7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer-2-outline"} {...others} />);
}

export default Component;
