import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or7ddzi3a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="or7ddzi3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:heavy-equals-sign"} {...others} />);
}

export default Component;
