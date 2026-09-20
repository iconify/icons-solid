import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-1t6y5ob.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="f-1t6y5ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:line-arrow-reload-vertical-1-remix"} {...others} />);
}

export default Component;
