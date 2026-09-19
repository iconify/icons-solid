import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7-0qs29e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x7-0qs29e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:markdownlint"} {...others} />);
}

export default Component;
