import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg1yxfb0n.css';
import '../../css/s/stheyzbwt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eg1yxfb0n"/><path class="stheyzbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:version-major"} {...others} />);
}

export default Component;
