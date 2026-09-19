import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-wowdbgx.css';
import '../../css/t/tpt91hf7v.css';
import '../../css/g/gk8w0lbff.css';
import '../../css/l/l0ee79b0u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="c-wowdbgx"/><path class="tpt91hf7v"/><path class="gk8w0lbff"/><path class="l0ee79b0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:dotted-line-face"} {...others} />);
}

export default Component;
