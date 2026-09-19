import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4_utgbeg.css';

const viewBox = {"width":32,"height":32};
const content = `<path clip-rule="evenodd" class="c4_utgbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:globe-with-meridians"} {...others} />);
}

export default Component;
