import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_f6jmvbo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m_f6jmvbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:red-exclamation-mark"} {...others} />);
}

export default Component;
