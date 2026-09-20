import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/faozekbyo.css';
import '../../css/g/gwo722bgu.css';
import '../../css/b/borv8hbul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="faozekbyo"/><path class="gwo722bgu"/><path class="borv8hbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:github-logo-1"} {...others} />);
}

export default Component;
