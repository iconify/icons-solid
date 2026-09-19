import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jns9x8bmo.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="jns9x8bmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:join-online-meeting"} {...others} />);
}

export default Component;
