import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe_ubo__v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xe_ubo__v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:oncoming-taxi"} {...others} />);
}

export default Component;
