import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqfkc7sdq.css';
import '../../css/e/ewu1xebzy.css';
import '../../css/d/dssx2mbkc.css';
import '../../css/n/np0_htpxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fqfkc7sdq"/><path class="ewu1xebzy"/><path class="dssx2mbkc"/><path class="np0_htpxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:mouse"} {...others} />);
}

export default Component;
