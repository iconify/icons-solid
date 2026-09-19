import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/czbk68b1i.css';
import '../../css/a/af7v1pb9u.css';

const viewBox = {"width":32,"height":32};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="czbk68b1i"/><path class="af7v1pb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:flower-playing-cards"} {...others} />);
}

export default Component;
