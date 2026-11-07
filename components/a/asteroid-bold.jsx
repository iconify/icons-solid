import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq1o4rbim.css';
import '../../css/b/b1o-4174v.css';
import '../../css/c/cu88vc6ti.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cq1o4rbim"/><path class="b1o-4174v"/><path class="cu88vc6ti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:asteroid-bold"} {...others} />);
}

export default Component;
