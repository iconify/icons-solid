import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1hf5acsv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="v1hf5acsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wifi-horizontal"} {...others} />);
}

export default Component;
