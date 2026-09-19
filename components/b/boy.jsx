import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruak_pb9u.css';
import '../../css/k/k4jt908-j.css';
import '../../css/y/ycq0hybqw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ruak_pb9u"/><path class="k4jt908-j"/><path class="ycq0hybqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:boy"} {...others} />);
}

export default Component;
