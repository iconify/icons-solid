import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjugphbbc.css';
import '../../css/u/u5yldcb3g.css';
import '../../css/f/fip9ksb8z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vjugphbbc"/><path class="u5yldcb3g"/><path class="fip9ksb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-star-48"} {...others} />);
}

export default Component;
