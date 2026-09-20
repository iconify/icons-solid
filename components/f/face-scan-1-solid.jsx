import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyb9v64yf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="dyb9v64yf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:face-scan-1-solid"} {...others} />);
}

export default Component;
