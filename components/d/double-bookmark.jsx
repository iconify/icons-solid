import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eckk_6b8x.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="eckk_6b8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:double-bookmark"} {...others} />);
}

export default Component;
