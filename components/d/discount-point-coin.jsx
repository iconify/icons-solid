import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xnjk5tbcl.css';
import '../../css/u/ur0l-abgr.css';
import '../../css/z/zxir54b-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xnjk5tbcl"/><path class="ur0l-abgr"/><path class="zxir54b-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:discount-point-coin"} {...others} />);
}

export default Component;
