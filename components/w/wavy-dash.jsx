import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b83gw5wch.css';

const viewBox = {"width":32,"height":32};
const content = `<path clip-rule="evenodd" class="b83gw5wch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:wavy-dash"} {...others} />);
}

export default Component;
