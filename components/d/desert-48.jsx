import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9jlb0bcj.css';
import '../../css/t/t-558ne9u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v9jlb0bcj"/><path class="t-558ne9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desert-48"} {...others} />);
}

export default Component;
