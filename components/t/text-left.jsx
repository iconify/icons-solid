import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1wd0cdzw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x1wd0cdzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:text-left"} {...others} />);
}

export default Component;
