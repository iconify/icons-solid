import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cdqi89uqz.css';
import '../../css/f/fnpz7hl0i.css';
import '../../css/a/au6mv_ewn.css';
import '../../css/f/f4x0cwtqd.css';
import '../../css/u/u6ejn4b7d.css';
import '../../css/j/jtl23jtof.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cdqi89uqz"/><path class="fnpz7hl0i"/><path class="au6mv_ewn"/><path class="f4x0cwtqd"/><path class="u6ejn4b7d"/><path class="jtl23jtof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:equalizer-stereo-play"} {...others} />);
}

export default Component;
