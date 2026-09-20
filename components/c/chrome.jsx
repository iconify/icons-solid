import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgng9qxjd.css';
import '../../css/i/ioti6mmec.css';
import '../../css/y/ydnrgmbdn.css';
import '../../css/j/jtsbu9bpu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kgng9qxjd"/><path class="ioti6mmec"/><path class="ydnrgmbdn"/><path class="jtsbu9bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chrome"} {...others} />);
}

export default Component;
