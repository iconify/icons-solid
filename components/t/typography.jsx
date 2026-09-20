import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z13jkwbug.css';
import '../../css/r/r25b-tj4p.css';
import '../../css/a/a3n9426do.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z13jkwbug"/><path class="r25b-tj4p"/><path class="a3n9426do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:typography"} {...others} />);
}

export default Component;
