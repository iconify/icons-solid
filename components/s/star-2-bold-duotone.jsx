import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjpdcd8tl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/o41yu376m.css';
import '../../css/z/zpf651buk.css';
import '../../css/v/vq6hnmb4m.css';
import '../../css/t/tkcb4cb5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pjpdcd8tl"/><g class="xtpeb-edw"><path class="o41yu376m"/><path class="zpf651buk"/><path class="vq6hnmb4m"/><path class="tkcb4cb5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-2-bold-duotone"} {...others} />);
}

export default Component;
