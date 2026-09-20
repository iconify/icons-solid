import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyx-z-b5j.css';
import '../../css/r/rd66pungk.css';
import '../../css/o/ob8zxnqwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="iyx-z-b5j"/><path clip-rule="evenodd" class="rd66pungk"/><path clip-rule="evenodd" class="ob8zxnqwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:drum-stick-flat"} {...others} />);
}

export default Component;
