import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfs41yb4d.css';
import '../../css/a/a9y45tbwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wfs41yb4d"/><path class="a9y45tbwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bookmark-heart"} {...others} />);
}

export default Component;
