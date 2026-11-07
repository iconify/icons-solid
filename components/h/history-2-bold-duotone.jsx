import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj6r2i5qw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fnwyp6her.css';
import '../../css/k/ko8_sebfn.css';
import '../../css/e/ef1sgg4fe.css';
import '../../css/s/szch40bqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qj6r2i5qw"/><g class="xtpeb-edw"><path class="fnwyp6her"/><path class="ko8_sebfn"/><path class="ef1sgg4fe"/><path class="szch40bqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:history-2-bold-duotone"} {...others} />);
}

export default Component;
