import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcx_74b1t.css';
import '../../css/f/fg82spubh.css';
import '../../css/h/h6odg9b1z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xcx_74b1t"/><path class="fg82spubh"/><path class="h6odg9b1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:lady-beetle"} {...others} />);
}

export default Component;
