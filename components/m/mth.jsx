import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtg_89bpo.css';
import '../../css/t/tv3pd_b5j.css';
import '../../css/l/lb1lpfbgu.css';
import '../../css/j/j59snk35s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dtg_89bpo"/><path class="tv3pd_b5j"/><path class="lb1lpfbgu"/><path class="j59snk35s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:mth"} {...others} />);
}

export default Component;
