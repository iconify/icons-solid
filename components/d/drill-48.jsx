import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrd0nmjhn.css';
import '../../css/y/yxqo9ym2g.css';
import '../../css/u/u7ur8ubvi.css';
import '../../css/b/b_yf7jb9p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xrd0nmjhn"/><path class="yxqo9ym2g"/><path class="u7ur8ubvi"/><path class="b_yf7jb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drill-48"} {...others} />);
}

export default Component;
