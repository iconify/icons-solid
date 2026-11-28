import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs63rmt4l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cj7qh-02u.css';
import '../../css/r/r8xumq8dh.css';
import '../../css/w/wvsuvupws.css';
import '../../css/j/ju0840bmy.css';
import '../../css/v/vjzau-ekp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gs63rmt4l secondary"/><g class="dt0cm9dhy primary"><path class="cj7qh-02u"/><path class="r8xumq8dh"/><path class="wvsuvupws"/><path class="ju0840bmy"/><path class="vjzau-ekp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:speech-to-text-duo"} {...others} />);
}

export default Component;
