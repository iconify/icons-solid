import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6suppbvh.css';
import '../../css/j/jn736qsgz.css';
import '../../css/h/hqfelibkn.css';

const viewBox = {"width":256,"height":170};
const content = `<path class="a6suppbvh"/><path class="jn736qsgz"/><path class="hqfelibkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mariadb"} {...others} />);
}

export default Component;
