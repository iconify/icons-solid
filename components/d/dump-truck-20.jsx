import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whrwdskwh.css';
import '../../css/a/ao3d_1b-k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="whrwdskwh"/><path class="ao3d_1b-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dump-truck-20"} {...others} />);
}

export default Component;
