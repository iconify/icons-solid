import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/n/n5yt22b6q.css';
import '../../css/r/ro0gdgbme.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="n5yt22b6q"/><path class="ro0gdgbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:optimize"} {...others} />);
}

export default Component;
