import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x6nzs8bfh.css';
import '../../css/v/vvtxee9sq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="x6nzs8bfh"/><path class="vvtxee9sq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hot-spring"} {...others} />);
}

export default Component;
