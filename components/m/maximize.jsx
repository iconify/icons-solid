import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a4fvsub_h.css';
import '../../css/k/keop23btv.css';
import '../../css/a/arz8oxjao.css';
import '../../css/t/tuxs9rrbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a4fvsub_h"/><path class="keop23btv"/><path class="arz8oxjao"/><path class="tuxs9rrbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:maximize"} {...others} />);
}

export default Component;
