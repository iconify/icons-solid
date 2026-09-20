import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m31oa8una.css';
import '../../css/j/jk78v9bui.css';
import '../../css/t/t94nmlqoa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m31oa8una"/><path class="jk78v9bui"/><path class="t94nmlqoa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:blackberry-logo"} {...others} />);
}

export default Component;
