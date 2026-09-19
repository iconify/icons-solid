import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvkjlqb7z.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="wvkjlqb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:mxentry"} {...others} />);
}

export default Component;
