import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdw6qmbbg.css';
import '../../css/k/kwyvscbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xdw6qmbbg"/><path class="kwyvscbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cardboard-vr-line"} {...others} />);
}

export default Component;
