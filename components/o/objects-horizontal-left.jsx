import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4tqe28pg.css';
import '../../css/r/rfi2jbchm.css';
import '../../css/e/eb9scq8yj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4tqe28pg"/><rect class="rfi2jbchm"/><rect class="eb9scq8yj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:objects-horizontal-left"} {...others} />);
}

export default Component;
