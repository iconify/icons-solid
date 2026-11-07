import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zimgv8bvk.css';
import '../../css/c/cudl-bmyd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zimgv8bvk"/><path class="cudl-bmyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plmail-dark"} {...others} />);
}

export default Component;
