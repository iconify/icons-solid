import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmp5eubnr.css';
import '../../css/x/xj2gq3bwa.css';
import '../../css/u/uilqb5bzk.css';
import '../../css/b/bs44wexou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tmp5eubnr"/><path class="xj2gq3bwa"/><circle class="uilqb5bzk"/><path class="bs44wexou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:reload-x"} {...others} />);
}

export default Component;
