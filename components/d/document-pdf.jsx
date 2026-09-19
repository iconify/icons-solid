import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvlro3bdf.css';
import '../../css/w/whiyyb3wc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qvlro3bdf"/><path class="whiyyb3wc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-pdf"} {...others} />);
}

export default Component;
