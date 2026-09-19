import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lgztr_bhc.css';
import '../../css/t/tiwcnbcjo.css';
import '../../css/u/urlrlhb3s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lgztr_bhc"/><path class="tiwcnbcjo"/><path class="urlrlhb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pretzel"} {...others} />);
}

export default Component;
