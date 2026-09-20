import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4s1krj7f.css';
import '../../css/a/aw7yywbhe.css';
import '../../css/m/mrd423bky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l4s1krj7f"/><path class="aw7yywbhe"/><path class="mrd423bky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-pills-line-duotone"} {...others} />);
}

export default Component;
