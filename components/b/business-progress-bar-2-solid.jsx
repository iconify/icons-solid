import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh1vh8bgc.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="rh1vh8bgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:business-progress-bar-2-solid"} {...others} />);
}

export default Component;
