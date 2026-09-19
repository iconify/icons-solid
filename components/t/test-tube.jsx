import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9apszbzh.css';
import '../../css/x/x-t5qxbzm.css';
import '../../css/i/ibuyixdlq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="f9apszbzh"/><path class="x-t5qxbzm"/><path class="ibuyixdlq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:test-tube"} {...others} />);
}

export default Component;
