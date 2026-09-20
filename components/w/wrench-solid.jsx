import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2p1z0-xu.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="i2p1z0-xu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:wrench-solid"} {...others} />);
}

export default Component;
