import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8w6b6l9s.css';
import '../../css/i/i1aaxkb5y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a8w6b6l9s"/><path class="i1aaxkb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plug-uk-48"} {...others} />);
}

export default Component;
