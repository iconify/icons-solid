import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qskr1bcgn.css';
import '../../css/s/st95v6bsx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="qskr1bcgn"/><path class="st95v6bsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:lemon-fruit-seasoning"} {...others} />);
}

export default Component;
