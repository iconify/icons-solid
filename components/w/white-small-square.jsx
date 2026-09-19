import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztj20xrrt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ztj20xrrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:white-small-square"} {...others} />);
}

export default Component;
