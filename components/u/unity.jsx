import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8eah7ecu.css';
import '../../css/j/jk9k79i2a.css';
import '../../css/n/npy1bcc-b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c8eah7ecu"/><path class="jk9k79i2a"/><path class="npy1bcc-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:unity"} {...others} />);
}

export default Component;
