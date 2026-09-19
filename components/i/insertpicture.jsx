import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwhlp8bpu.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fwhlp8bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:insertpicture"} {...others} />);
}

export default Component;
