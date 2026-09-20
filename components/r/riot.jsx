import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnolvzexl.css';
import '../../css/a/ag8wbubia.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pnolvzexl"/><path class="ag8wbubia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:riot"} {...others} />);
}

export default Component;
