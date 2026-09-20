import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_cyddb_p.css';
import '../../css/i/ihhtxk45i.css';
import '../../css/d/dehs78hfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y_cyddb_p"/><path class="ihhtxk45i"/><path clip-rule="evenodd" class="dehs78hfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shield-up"} {...others} />);
}

export default Component;
