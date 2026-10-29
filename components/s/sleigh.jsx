import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ole243bii.css';
import '../../css/i/izkpyxa0t.css';
import '../../css/m/m17u19fal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ole243bii"/><path class="izkpyxa0t"/><path class="m17u19fal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sleigh"} {...others} />);
}

export default Component;
