import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l48v19blq.css';
import '../../css/d/ddbnlobxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="l48v19blq"/><path class="ddbnlobxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:tunein-logo"} {...others} />);
}

export default Component;
