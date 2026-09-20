import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu5t0njoc.css';
import '../../css/p/p9-rcnbpg.css';
import '../../css/h/h6yrkj2wo.css';
import '../../css/q/q-j8rrb9q.css';
import '../../css/v/v1mhp2j5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yu5t0njoc"/><path class="p9-rcnbpg"/><path class="h6yrkj2wo"/><path class="q-j8rrb9q"/><circle class="v1mhp2j5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hunyuan"} {...others} />);
}

export default Component;
