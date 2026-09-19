import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tz-4bx35q.css';
import '../../css/b/bmp-g8bcq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="tz-4bx35q"/><path class="bmp-g8bcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ebst"} {...others} />);
}

export default Component;
