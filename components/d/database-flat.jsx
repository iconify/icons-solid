import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vev4r1bfz.css';
import '../../css/o/o0crbp0qx.css';
import '../../css/f/f_gm45b2g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vev4r1bfz"/><path clip-rule="evenodd" class="o0crbp0qx"/><path clip-rule="evenodd" class="f_gm45b2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:database-flat"} {...others} />);
}

export default Component;
