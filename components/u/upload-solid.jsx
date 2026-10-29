import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/js8tk3ugw.css';
import '../../css/g/g8ziwja_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="js8tk3ugw"/><path class="g8ziwja_r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:upload-solid"} {...others} />);
}

export default Component;
