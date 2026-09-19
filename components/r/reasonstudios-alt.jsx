import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebr0d7qtr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ebr0d7qtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:reasonstudios-alt"} {...others} />);
}

export default Component;
