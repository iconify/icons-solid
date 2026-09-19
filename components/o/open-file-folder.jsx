import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upsw8zbeh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="upsw8zbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:open-file-folder"} {...others} />);
}

export default Component;
