import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czw1vn6gj.css';
import '../../css/z/ziu6zbbkf.css';
import '../../css/s/sjzsw9bzq.css';
import '../../css/w/ww6c5hlhz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="czw1vn6gj"/><path class="ziu6zbbkf"/><path class="sjzsw9bzq"/><path class="ww6c5hlhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:cashing-check"} {...others} />);
}

export default Component;
