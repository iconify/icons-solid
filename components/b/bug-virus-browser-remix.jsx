import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-uxht4zc.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h-uxht4zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:bug-virus-browser-remix"} {...others} />);
}

export default Component;
