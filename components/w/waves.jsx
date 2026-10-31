import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yhqv48bve.css';
import '../../css/x/x1magxb6p.css';
import '../../css/w/wnjreblij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yhqv48bve"/><path class="wm-shadow x1magxb6p"/><path class="wnjreblij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:waves"} {...others} />);
}

export default Component;
