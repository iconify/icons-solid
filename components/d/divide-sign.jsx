import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gea6e1b-z.css';
import '../../css/d/ddrvxpbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gea6e1b-z"/><path class="ddrvxpbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:divide-sign"} {...others} />);
}

export default Component;
