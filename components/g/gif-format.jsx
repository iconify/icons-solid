import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hesvm7i3z.css';
import '../../css/y/yzhwl80_f.css';
import '../../css/v/v11-2dbod.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hesvm7i3z"/><path class="yzhwl80_f"/><path class="v11-2dbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gif-format"} {...others} />);
}

export default Component;
