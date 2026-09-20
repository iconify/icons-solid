import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/ziygmcxzn.css';
import '../../css/l/l2xaw8bcb.css';
import '../../css/y/yla1pjbjb.css';
import '../../css/r/runq6zfif.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ziygmcxzn"/><path class="l2xaw8bcb"/><path class="yla1pjbjb"/><path class="runq6zfif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:modern-music-dj"} {...others} />);
}

export default Component;
