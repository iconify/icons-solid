import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i31-vfb1y.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="i31-vfb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:align-center-solid"} {...others} />);
}

export default Component;
