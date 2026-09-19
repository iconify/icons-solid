import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr1ea_ben.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gr1ea_ben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:torigate"} {...others} />);
}

export default Component;
