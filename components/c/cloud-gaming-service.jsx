import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s2wl61vvr.css';
import '../../css/x/x5zw6sbwv.css';
import '../../css/r/rxl27eg2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="s2wl61vvr"/><path class="x5zw6sbwv"/><path class="rxl27eg2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cloud-gaming-service"} {...others} />);
}

export default Component;
