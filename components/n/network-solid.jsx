import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hz38l9bau.css';
import '../../css/b/bhse_2bgx.css';
import '../../css/v/v509wnbnq.css';
import '../../css/r/r7ac2ob5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect class="hz38l9bau"/><rect class="bhse_2bgx"/><rect class="v509wnbnq"/><path class="r7ac2ob5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:network-solid"} {...others} />);
}

export default Component;
