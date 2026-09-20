import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bub8qccmg.css';
import '../../css/d/dbifspbys.css';
import '../../css/c/cdp_3db-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bub8qccmg"/><path class="dbifspbys"/><path class="cdp_3db-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:layers2-filled"} {...others} />);
}

export default Component;
