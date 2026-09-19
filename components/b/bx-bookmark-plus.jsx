import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzxk1obup.css';
import '../../css/w/wfs41yb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzxk1obup"/><path class="wfs41yb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-bookmark-plus"} {...others} />);
}

export default Component;
