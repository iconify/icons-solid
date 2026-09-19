import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td2ntbexb.css';
import '../../css/w/w74p6ub3q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="td2ntbexb"/><path class="w74p6ub3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vertx"} {...others} />);
}

export default Component;
