import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j82-wlwsc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="j82-wlwsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:precisecursor"} {...others} />);
}

export default Component;
