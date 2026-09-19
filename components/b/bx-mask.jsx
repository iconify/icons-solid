import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aleoypblh.css';
import '../../css/q/qqfcp2vpb.css';
import '../../css/j/j496qmb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aleoypblh"/><ellipse class="qqfcp2vpb"/><ellipse class="j496qmb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-mask"} {...others} />);
}

export default Component;
