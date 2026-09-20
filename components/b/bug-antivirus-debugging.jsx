import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2umeba-b.css';
import '../../css/e/eejzubcvn.css';
import '../../css/m/mtcwjuzeb.css';
import '../../css/n/n_-n_ybll.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h2umeba-b"/><path class="eejzubcvn"/><path class="mtcwjuzeb"/><path class="n_-n_ybll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bug-antivirus-debugging"} {...others} />);
}

export default Component;
