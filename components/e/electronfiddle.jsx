import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w80nyo8vn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w80nyo8vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:electronfiddle"} {...others} />);
}

export default Component;
