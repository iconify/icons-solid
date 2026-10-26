import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/g/gzk1gqbcs.css';
import '../../css/x/xqtkvnb9e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="gzk1gqbcs"/><path class="xqtkvnb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:megaphone"} {...others} />);
}

export default Component;
