import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1acdg4aa.css';
import '../../css/i/ic7c7lbfd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r1acdg4aa"/><path class="ic7c7lbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drought-48"} {...others} />);
}

export default Component;
