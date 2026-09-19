import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbygc4bqp.css';
import '../../css/o/obs24acsp.css';
import '../../css/o/o_uhbsp1t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xbygc4bqp"/><path class="obs24acsp"/><ellipse transform="rotate(30 23.477 12.594)" class="o_uhbsp1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:brown-heart"} {...others} />);
}

export default Component;
