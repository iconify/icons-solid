import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqo2dvk4m.css';
import '../../css/p/p1l0ufzst.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqo2dvk4m"/><path class="p1l0ufzst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:taj-mahal-line"} {...others} />);
}

export default Component;
