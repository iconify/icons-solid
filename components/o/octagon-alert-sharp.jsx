import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/up15_y9jb.css';
import '../../css/j/j_efvl6tx.css';
import '../../css/z/zs843lqwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="up15_y9jb"/><path class="j_efvl6tx"/><path class="zs843lqwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:octagon-alert-sharp"} {...others} />);
}

export default Component;
