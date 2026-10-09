import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpcq5gb3e.css';
import '../../css/j/j0wasckez.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wpcq5gb3e"/><path class="j0wasckez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-right-to-line-48"} {...others} />);
}

export default Component;
