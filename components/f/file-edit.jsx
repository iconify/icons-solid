import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxmzf6d8k.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="uxmzf6d8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:file-edit"} {...others} />);
}

export default Component;
