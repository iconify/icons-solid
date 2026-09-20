import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/ozerjco_v.css';
import '../../css/t/ttgkmqbrw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ozerjco_v"/><path class="ttgkmqbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-sticker-square"} {...others} />);
}

export default Component;
