import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnahg-_fl.css';
import '../../css/s/s9uxlpl9s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cnahg-_fl"/><path class="s9uxlpl9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jar-48-bold"} {...others} />);
}

export default Component;
