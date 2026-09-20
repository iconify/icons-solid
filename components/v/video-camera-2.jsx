import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzsd4cbnd.css';
import '../../css/r/r61ck_7vl.css';
import '../../css/d/d9sh3ra4x.css';
import '../../css/c/c45pyibuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qzsd4cbnd"/><path class="r61ck_7vl"/><path class="d9sh3ra4x"/><path class="c45pyibuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:video-camera-2"} {...others} />);
}

export default Component;
