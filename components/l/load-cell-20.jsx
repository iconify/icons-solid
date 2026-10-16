import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0rnyhxzu.css';
import '../../css/y/yv3ldgslo.css';
import '../../css/v/vd38aibtw.css';
import '../../css/q/qr5-gge8l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j0rnyhxzu"/><path class="yv3ldgslo"/><path class="vd38aibtw"/><path class="qr5-gge8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-cell-20"} {...others} />);
}

export default Component;
