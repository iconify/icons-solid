import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx2hn-xxl.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="sx2hn-xxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:align-horizontal-right"} {...others} />);
}

export default Component;
