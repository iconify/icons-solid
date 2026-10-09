import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/m/m08jo-lrz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="m08jo-lrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:meh-48-bold"} {...others} />);
}

export default Component;
