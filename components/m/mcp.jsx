import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leig0z_lw.css';
import '../../css/u/uitb-4b_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="leig0z_lw"/><path class="uitb-4b_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:mcp"} {...others} />);
}

export default Component;
