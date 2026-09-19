import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rllujjb-s.css';
import '../../css/n/n36fbt-7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rllujjb-s"/><path class="n36fbt-7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-imdb"} {...others} />);
}

export default Component;
