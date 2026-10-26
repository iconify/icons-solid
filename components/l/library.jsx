import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1bjk9b9k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h1bjk9b9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:library"} {...others} />);
}

export default Component;
