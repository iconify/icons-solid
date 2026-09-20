import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4sq9-xnx.css';
import '../../css/g/g092g62sw.css';
import '../../css/h/hr5z6ac5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x4sq9-xnx"/><path class="g092g62sw"/><path class="hr5z6ac5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:curtain"} {...others} />);
}

export default Component;
