import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k9o9xjf6i.css';
import '../../css/g/gjs9f88_s.css';
import '../../css/t/tey93ihjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k9o9xjf6i"/><path class="gjs9f88_s"/><path class="tey93ihjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:unlink-duo"} {...others} />);
}

export default Component;
