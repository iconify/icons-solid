import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blq0-bb8d.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="blq0-bb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:voicemail-reply"} {...others} />);
}

export default Component;
