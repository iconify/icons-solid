import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-ahsnbld.css';
import '../../css/w/wc5gufbvx.css';
import '../../css/i/itu8fbbds.css';
import '../../css/v/vjij33b4c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h-ahsnbld"/><path class="wc5gufbvx"/><path class="itu8fbbds"/><path class="vjij33b4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gravity-storage-20-bold"} {...others} />);
}

export default Component;
