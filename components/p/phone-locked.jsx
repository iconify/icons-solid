import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1l-1zd3y.css';
import '../../css/d/dbralob5d.css';
import '../../css/y/yp5vu9tnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c1l-1zd3y"/><path class="dbralob5d"/><path class="yp5vu9tnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:phone-locked"} {...others} />);
}

export default Component;
