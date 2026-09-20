import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_xxphbqx.css';
import '../../css/r/r0tjoehii.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="y_xxphbqx"/><rect class="ouiSwatchInput__stroke r0tjoehii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:swatch-input"} {...others} />);
}

export default Component;
