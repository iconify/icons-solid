import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du7ckob0x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="du7ckob0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:heavy-dollar-sign"} {...others} />);
}

export default Component;
