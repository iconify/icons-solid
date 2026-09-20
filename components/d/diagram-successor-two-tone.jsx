import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/le-z6_x1u.css';
import '../../css/p/p82-p0bjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="le-z6_x1u"/><path class="p82-p0bjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-successor-two-tone"} {...others} />);
}

export default Component;
