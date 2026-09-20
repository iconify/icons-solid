import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9007y6zb.css';
import '../../css/f/f-t8t2isn.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/x/xlyu1ccaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d9007y6zb"/><path class="f-t8t2isn"/><path class="x19qmcbwy"/><path class="xlyu1ccaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:add-circle-bold"} {...others} />);
}

export default Component;
